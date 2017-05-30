var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'],
    maleNames = ['Piotrek', 'Marek', 'Jarek', 'Arek'],
    allNames = femaleNames.concat(maleNames),
    newName = 'Marian';

if(allNames.indexOf(newName) === -1) {
  allNames.push(newName);
} else {
  console.log('Sorry, this name already exist in the array :-(');
}
