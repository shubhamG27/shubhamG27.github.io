var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === '../../pic.jpg') {
      myImage.setAttribute ('src','../../IMG_20180515_215647.jpg');
    } else {
      myImage.setAttribute ('src','../../pic.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('name');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
} 
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}


myButton.onclick = function() {
  setUserName();
}






