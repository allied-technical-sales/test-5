const Immutable = require('immutable');

// transform into a map with attributes being keys, and values being a list of animals from the original list
// who have the attribute as 'true'
// e.g. in the fromShape, we have cat and snake with 'long' == true
// so in the toShape, we want long: [ 'cat', 'snake' ]
const transform = (fromShape) => {
  fromShape = fromShape.first()
    .mapKeys(i => fromShape
      .groupBy(x => (x.get(i) === true ? i : '')).filter((x, k) => k === i))
    .map((x, y) => y)
    .reduce((acc, k) => acc.concat(k))
    .map((x, y) => x.keySeq())
  return fromShape;
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