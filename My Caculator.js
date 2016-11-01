var input = document.getElementById("input");
var result = document.getElementById("result");
var numClicked, numBeforeOper, operStream;

var numBtns = document.getElementsByClassName("number");
for(i=0; i<numBtns.length; i++){
  
  numBtns[i].onclick = function(){  
    numClicked = this.id;
    input.innerHTML += numClicked;

  };
}

var operBtns = document.getElementsByClassName("operator");
for(j=0; j<operBtns.length; j++){
  operBtns[j].onclick = function(){
    var operClicked = this.id;
    operStream = operClicked;
    numBeforeOper = numClicked;
    input.innerHTML += operClicked;

  };
}

var equal = document.getElementById("=");
equal.onclick = function(){
  switch(operStream){   
  case '+':   
  result.innerHTML = numBeforeOper+numClicked;   
  break;   
  case '-':   
  result.innerHTML = numBeforeOper-numClicked;   
  break;   
  case '*':   
  result.innerHTML = numBeforeOper*numClicked;   
  break;   
  case '/':   
  result.innerHTML = numBeforeOper/numClicked;  
  break;   
  case '%':   
  result.innerHTML = numBeforeOper%numClicked;
  break;   
  }   
}
