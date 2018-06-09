import mongoose from 'mongoose';
const Dojo = mongoose.model('Dojo');

export const addDojo = async (req, res) => {
	const dojo = await (new Dojo(req.body)).save();
	console.log(dojo)
	res.json({dojo:'yes'});
}