var animationType  = function(myClass){
  var myTextToSplit = document.getElementsByClassName('animText');
  //var myClass = 'animType1';
  for (var i = 0; i < myTextToSplit.length; i++) {
    /* Val for the win  */
    var myTag = myTextToSplit[i].innerHTML.split(/(<[^>]+>)/g);
    var html = '';
    console.log(myTag);
    for (var j = 0; j < myTag.length; j++){
      console.log(myTag[j].split(' '));
      html += ( !myTag[j].includes('<') && !myTag[j].includes('\n')  ? myTag[j].split('').join('</span><span class=\'' + myClass + ' \' >') : myTag[j] );
    }
    myTextToSplit[i].innerHTML = '<span class=\'' + myClass + ' \'>' + html + '</span>';
  }
  console.log(myClass + ' Split done !');
}
document.addEventListener("DOMContentLoaded", function(event) {
  animationType('animType1');
});


/******  WIP  ******/
