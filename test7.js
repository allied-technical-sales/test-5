const Immutable = require('immutable');

// similar to test6, but group the elements by what they would be mapped to in fizzbuzz 
const transform = (fromShape) => {
	const rules = Immutable.fromJS({
		'fizz': (i) => i % 3 === 0,
		'buzz': (i) => i % 5 === 0
	});
	const sortingHat = (value) => {
		parts = rules.filter((rule) => {
			return rule(value);
		}).keySeq();
		return parts.count() ? parts.join('') : 'other';
	};
	return fromShape.reduce((result, val) => {
		return result.setIn([sortingHat(val)], result.getIn([sortingHat(val)]).push(val));
	}, Immutable.fromJS({
		fizz: [],
		buzz: [],
		fizzbuzz: [],
		other: []
	}));
};

const fromShape = Immutable.fromJS([
	10,
	11,
	12,
	13,
	14,
	15,
	16,
	17,
	18,
	19,
	20,
]);

const toShape = Immutable.fromJS({
	fizz: [
		12,
		18,
	],
	buzz: [
		10,
		20,
	],
	fizzbuzz: [
		15,
	],
	other: [
		11,
		13,
		14,
		16,
		17,
		19,
	],
});

module.exports = {
	transform,
	toShape,
	fromShape,
};