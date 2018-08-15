const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');


it ('should return integer style points', () => {
    var styleNotes = [16, 14, 18, 20, 17]
    const actual = calculateStylePoints(styleNotes);

    const expected = '51';

    assert.equal(actual, expected);
});

it ('should return decimal style points', () => {
    var styleNotes = [16.5, 14, 18, 20, 17]
    const actual = calculateStylePoints(styleNotes);

    const expected = '51.5';

    assert.equal(actual, expected);
});
 
it ('should return multiple of style mark', () => {
    var styleNotes = [20, 20, 20, 20, 20]
    const actual = calculateStylePoints(styleNotes);

    const expected = '60';

    assert.equal(actual, expected);
});


