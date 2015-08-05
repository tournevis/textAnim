var myTextToSplit = document.getElementsByClassName('animText');

for (var i = 0; i < myTextToSplit.length; i++) {
  /* Val for the win  */
  var myTag = myTextToSplit[i].innerHTML.split(/(<([^>]+)>)/ig);
  console.log(myTag);
  var text = myTextToSplit[i].innerHTML;
  myTextToSplit[i].innerHTML = '<span>' + text.split('').join('</span><span>') + '</span>';
}
console.log('SPLITED');


// var tagRegex = /(<([^>]+)>)/ig ;
// var tagTab = text.match(tagRegex);
// if (tagTab){
//   for (var i = 0; i < tagTab.length; i++) {
//     tagRegex.exec(text);
//     console.log(tagRegex.lastIndex);
//   }
//   console.log(tagTab + ' number of i : ' + i);
// }

/******  WIP  ******/
