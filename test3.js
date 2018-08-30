const Immutable = require('immutable');
const {List} = require('immutable');

const transform = (fromShape) => {
	return fromShape
		.flatten()
		.map((v, k) => {
			return fromShape
				.filter((val) => val.get(k))
				.map((val, key) => key)
				.toList();
		});
};


const fromShape = Immutable.fromJS({
	dog: {
		cute: true,
		long: false,
		smart: false,
	},
	cat: {
		cute: true,
		long: true,
		smart: true,
	},
	bird: {
		cute: true,
		long: false,
		smart: false,
	},
	snake: {
		cute: false,
		long: true,
		smart: false,
	},
});

const toShape = Immutable.fromJS({
	cute: [
		'dog',
		'cat',
		'bird',
	],
	long: [
		'cat',
		'snake',
	],
	smart: [
		'cat',
	],
});

module.exports = {
	transform,
	toShape,
	fromShape,
};