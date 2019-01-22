import mongoose from 'mongoose';
const Dojo = mongoose.model('Dojo');

export const getMetresFromMiles = (miles) => {
	return miles * 1609.344;
}

const mapDojoQueryParams = (params) => {
	if(!Object.keys(params).length) return null;

	let { 
		coordinates,
		tags,
		distance = 10,
	 } = params;

	const $maxDistance = getMetresFromMiles(distance);

	let obj = {};

	if(coordinates) {
		obj.location = {
			$near: {
				$geometry: {
					type: 'Polygon',
					coordinates: coordinates.split(',')
				},
				$maxDistance,
				$minDistance: 0,
			}
		}
	}

	if(tags) {
		obj.tags = {
			$in: tags.split(',')
		}
	}

	return obj;
}

export const getDojos = async (req, res) => {
	let page = req.params.page || 1,
		limit = 4,
		skip = (page * limit) - limit;

	const params = mapDojoQueryParams(req.query);
  
	const dojosPromise = Dojo
		.find(params)
		.skip(skip)
		.limit(limit)
		.sort({ created: 'desc' });
  
	const countPromise = Dojo.count(params);
  
	const [dojos, count] = await Promise.all([dojosPromise, countPromise]);
	const pages = Math.ceil(count / limit);
	
	res.json({ count, dojos });
}

export const getDojoBySlug = async (req, res) => {
	let { slug } = req.params;
  
	const dojo = await Dojo.findOne({ slug });
	
	res.json({ dojo });
}

export const addDojo = async (req, res) => {
	await (new Dojo(req.body)).save();

	res.status(200).send();
}