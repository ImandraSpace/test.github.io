var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');
clickWindow = function() {
    alert ('ЭТО АБЗАЦ');
}
document.querySelector('p').onclick = clickWindow;

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/sd.png') {
      myImage.setAttribute ('src','images/sd2.png');
    } else {
      myImage.setAttribute ('src','images/sd.png');
    }
}
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML  = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML  = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}