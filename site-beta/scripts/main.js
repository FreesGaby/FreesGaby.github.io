//Changer une image

let myImage=document.querySelector("img");

myImage.addEventListener("click", function() {
    let mySrc=myImage.getAttribute("src");
    if(mySrc==="images/satoru-gojo.webp"){
        myImage.setAttribute("src","images/izuku.jpg");
    } else {
        myImage=this.setAttribute("src", "images/satoru-gojo.webp");
    }
});


//Changer d'utilisateur

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Entrez votre nom : ');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Bienvenue ' + myName+' !';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Bienvenue ' + storedName+' !';
}

myButton.onclick = function() {
  setUserName();
}


//Multiplier deux nombres

var multiplyNumbers=document.getElementById("multiply");
var result=document.getElementById("result");

function multiply() {
    var number1=document.getElementById("number1").value;
    var number2=document.getElementById("number2").value;
    var value=number1*number2;
    result.innerHTML="The result is "+value;
}

multiplyNumbers.onclick=multiply;