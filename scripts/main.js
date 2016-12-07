var myImg = document.querySelector('img');
myImg.onclick = function() {
	var myImgSrc = myImg.getAttribute('src');
	if (myImgSrc === 'img/website-drawing-scan.png') {
		myImg.setAttribute('src', 'img/sea.jpg');
	}
	else {
		myImg.setAttribute('src', 'img/website-drawing-scan.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter youn name');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
	setUserName();
}
else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}