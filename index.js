// add solution here
function theBeatlesPlay(musician, instruments){
  var facts = [];
  for(var i = 0; i < musician.length; i++){
    facts.push(`${musician} plays ${instruments}`);
  }
  return facts;
}