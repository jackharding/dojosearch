import mongoose from 'mongoose';
const Dojo = mongoose.model('Dojo');

const mapDojoQueryParams = (params) => {
	if(!Object.keys(params).length) return null;

	let obj = {};

	for(let [key, val] of Object.entries(params)) {
		if(key === 'coordinates') {
			obj.location = {
				$geoWithin: {
					$geometry: {
						type: 'Polygon',
						coordinates: JSON.parse(val)
					}
				}
			}
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