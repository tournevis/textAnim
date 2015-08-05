var myTextToSplit = document.getElementsByClassName('animText');
for (var i = 0; i < myTextToSplit.length; i++) {
  /* Val for the win  */
  var text = myTextToSplit[i].innerHTML;
  myTextToSplit[i].innerHTML = '<span>' + text.split('').join('</span><span>') + '</span>';
}
console.log('SPLITED');
