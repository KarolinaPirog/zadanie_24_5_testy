const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');


it ('should return integer total points', () => {
    const actual = calculateTotalPoints(100, 'normal', 80, [16, 20, 15, 15, 15], 5, 3);

    const expected = '154';

    assert.equal(actual, expected);
});

it ('should return decimal total points', () => {
    const actual = calculateTotalPoints(205.5, 'huge', 220, [16, 20, 20, 16, 16], -2.1, 1);

    const expected = '153.5';

    assert.equal(actual, expected);
});

// (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor)



