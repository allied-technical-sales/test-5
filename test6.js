const Immutable = require('immutable');
const {Map} = require('immutable');
const {List} = require('immutable');

// map 'fizzbuzz' if multiple of three AND five, 'fizz' if multiple of three, 'buzz' if multiple of five, or just the number else
const transform = (fromShape) => {
	const rules = Immutable.fromJS({
		'fizz': (i) => i % 3 === 0,
		'buzz': (i) => i % 5 === 0
	});
	return fromShape.map(val => {
		parts = rules.filter((rule) => {
			return rule(val);
		}).keySeq();
		return parts.count() ? parts.join('') : val;
	});
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

const toShape = Immutable.fromJS([
	'buzz',
	11,
	'fizz',
	13,
	14,
	'fizzbuzz',
	16,
	17,
	'fizz',
	19,
	'buzz',
]);

module.exports = {
	transform,
	toShape,
	fromShape,
};