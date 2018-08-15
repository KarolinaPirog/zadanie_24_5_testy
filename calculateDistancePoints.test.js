const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

it ('should return zero additional distance points', () => {
    const actual = calculateDistancePoints(100, 'Normal', 100);

    const expected = '60';

    assert.equal(actual, expected);
});

it ('should return increased distance points', () => {
    const actual = calculateDistancePoints(100, 'huge', 98);

    const expected = '122.4';

    assert.equal(actual, expected);
});

it ('should return decrased distance points', () => {
    const actual = calculateDistancePoints(104.5, 'big', 105);

    const expected = '59.1';

    assert.equal(actual, expected);
});
