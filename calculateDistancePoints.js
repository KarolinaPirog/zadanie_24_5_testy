const calculateDistancePoints = (distance, hillSize, kPoint) => {
  var distancePoints;    
  var points = 60;
    if (hillSize == 'huge') {
      points = 120;
      distancePoints = 1.2;
    } else if (hillSize == 'big') {
      distancePoints = 1.8;
    } else {
      distancePoints = 2.0;
    }
    points += ((distance-kPoint)*distancePoints);
    return points;
  };
  
  module.exports = calculateDistancePoints;