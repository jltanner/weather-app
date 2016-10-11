var celsius;
var fahrenheit;

document.getElementById("submit").onclick = function() {
	celsius = parseInt(document.getElementById("celsius").value);
	fahrenheit = (celsius * (9/5)) + 32;
	if (fahrenheit < 43) {
		document.body.style.backgroundImage = "url(images/winter.jpg)";
		document.getElementById("result").innerHTML = fahrenheit;
		document.getElementById("result").style = "color: #4286f4";
	} else if (fahrenheit > 42 && fahrenheit < 60) {
		document.body.style.backgroundImage = "url(images/fall.jpg)";
		document.getElementById("result").innerHTML = fahrenheit;
		document.getElementById("result").style = "color: #b55913";
	} else if (fahrenheit >= 60 && fahrenheit < 75) {
		document.body.style.backgroundImage = "url(images/spring.jpg)";
		document.getElementById("result").innerHTML = fahrenheit;
		document.getElementById("result").style = "color: #378e1f";
	} else if (fahrenheit >= 75) {
		document.body.style.backgroundImage = "url(images/summer.jpg)";
		document.getElementById("result").innerHTML = fahrenheit;
		document.getElementById("result").style = "color: #d9e00d";
	}
}