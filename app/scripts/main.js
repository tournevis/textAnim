var myTextToSplit = document.getElementsByClassName('animText');
for (var i = 0; i < myTextToSplit.length; i++) {
  var characterArray = myTextToSplit[i].innerHTML.split('');
  myTextToSplit[i].innerHTML = '';
  for (var j = 0; j < characterArray.length; j++) {
  	var span = document.createElement('span');
  	span.appendChild(document.createTextNode( characterArray[j]));
  	myTextToSplit[i].appendChild(span);
  }
}
console.log('SPLITED');
