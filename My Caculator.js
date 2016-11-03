var input = document.getElementById("input");
var result = document.getElementById("result");
var numClicked, numBeforeOper, operClicked, stream;
var operPressed, equalPressed;

/*assign clear-clicked event*/
var clearBtn = document.getElementById("clear");
clearBtn.onclick = function(){
  input.innerHTML = "";
  result.innerHTML = "";
}

/*assign number-clicked events*/
var numBtns = document.getElementsByClassName("number");

for(i=0; i<numBtns.length; i++){
  numBtns[i].onclick = function (){
    if(equalPressed || operPressed){
      input.innerHTML = "";
      numClicked = this.id;
      input.innerHTML += numClicked;
      result.innerHTML += numClicked;
      stream = parseFloat(input.innerHTML);
    }
    else{
      numClicked = this.id;
      input.innerHTML += numClicked;
      result.innerHTML += numClicked;
      stream = parseFloat(input.innerHTML);
    }
  }
}


/*assign operator-clicked events*/
var operBtns = document.getElementsByClassName("operator");
for(j=0; j<operBtns.length; j++){
  operBtns[j].onclick = function (){
    operClicked = this.id;
    numBeforeOper = stream;
    input.innerHTML = operClicked;
    result.innerHTML += input.innerHTML;
    operPressed = "true";
  }
}



/*assign =clicked events*/
var equal = document.getElementById("=");
equal.onclick = function(){
  switch(operClicked){   
  case '+':   
  result.innerHTML = numBeforeOper+stream;   
  break;   
  case '-':   
  result.innerHTML = numBeforeOper-stream;   
  break;   
  case '*':   
  result.innerHTML = numBeforeOper*stream;   
  break;   
  case '/':   
  result.innerHTML = numBeforeOper/stream;  
  break;   
  case '%':   
  result.innerHTML = numBeforeOper%stream;
  break;   
  } 
  equalPressed = true;   
}
