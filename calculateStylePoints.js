const calculateStylePoints = (styleNotes) => {
  var sum = styleNotes.reduce(function(sum, x) {
    return sum + x;
  })
  sum -= (Math.max(...styleNotes) + Math.min(...styleNotes));
  return sum;
};

module.exports = calculateStylePoints;
