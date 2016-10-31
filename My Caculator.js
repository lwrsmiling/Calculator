var input = document.getElementById("input");
var result = document.getElementById("result");
var draft = new Array();

var numBtns = document.getElementsByClassName("number");
for(i=0; i<numBtns.length; i++){
  
  numBtns[i].onclick = function(){  
    var numClicked = parseInt(this.id);

  };
}

var operBtns = document.getElementsByClassName("operator");
for(j=0; j<operBtns.length; j++){
  operBtns[j].onclick = function(){
    var operClicked = this.id;

  };
}
input.innerHTML= numClicked + operClicked
var equal = document.getElementById("=");
/*equal.onclick = function(){
  var result = 
}*/
