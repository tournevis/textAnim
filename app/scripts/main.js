var myTextToSplit = document.getElementsByClassName('animText');
for (var i = 0; i < myTextToSplit.length; i++) {
  /* Val for the win  */
  var myTag = myTextToSplit[i].innerHTML.split(/(<[^>]+>)/g);
  var html = '';
  for (var j = 0; j < myTag.length; j++) {
    html += ( !myTag[j].includes('<') ? myTag[j].split('').join('</span><span>') : myTag[j] );
  }
  myTextToSplit[i].innerHTML = '<span>' + html + '</span>';
}
console.log('SPLITED');

/******  WIP  ******/
