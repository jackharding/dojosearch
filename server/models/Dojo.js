import mongoose from 'mongoose';
import slugs from 'slugs';

mongoose.Promise = global.Promise;

const dojoSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: 'Please enter a name.'
	},
	slug: String,
	description: {
		type: String,
		trim: true
	},
	tags: [String],
	created: {
		type: Date,
		default: Date.now
	},
	location: {
		type: {
			type: String,
			default: 'Point'
		},
		coordinates: [{
			type: Number,
			required: 'You must supply coordinates!'
		}],
		address: {
			type: String,
			required: 'You must supply an address!'
		}
	},
	photos: [{
		src: String,
		alt: String
	}],
	socialMedia: [{
		name: String,
		url: String
	}]
	// author: {
	// 	type: mongoose.Schema.ObjectId,
	// 	ref: 'User',
	// 	required: 'You must supply an author'
	// }
});

dojoSchema.pre('save', function(next) {
	// If the name hasn't changed, skip creating a slug
	if(!this.isModified('name')) {
		return next();
	}

	this.slug = slugs(this.name);
	next();
	// TODO: Unique slugs
});

const dojoModel = mongoose.model('Dojo', dojoSchema);

export default dojoModel;