// add solution here
function theBeatlesPlay(musician, instruments){
  var facts = [];
  for(var i = 0; i < musician.length; i++){
    facts.push(`${musician[i]} plays ${instruments[i]}`);
  }
  return facts;
}