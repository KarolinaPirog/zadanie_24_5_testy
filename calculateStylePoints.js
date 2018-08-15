const calculateStylePoints = (styleNotes) => {
  var maxNote = Math.max(styleNotes);
  var minNote = Math.min(styleNotes);  
  var sumNotes = 0;
  for (let i=0; i<styleNotes.length; i++) {
    sumNotes += styleNotes[i];
  }
  sumNotes -= (maxNote + minNote);
  return sumNotes;
};
  
module.exports = calculateStylePoints;