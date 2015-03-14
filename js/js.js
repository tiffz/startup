function random (seed) {
    var x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

function seedChoice (seed, choices) {
    return choices[Math.floor(random(seed) * choices.length)];
}

var bgRoot = "img/bg/";
var backgrounds = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", 
										"6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg",
										"11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", 
										"16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg",
										"21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", 
										"26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg",
										"31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg", 
										"36.jpg", "37.jpg", "38.jpg", "39.jpg", "40.jpg"];
var navColors = ["#1abc9c", "#16a085", "#f1c40f", "#f39c12", "#2ecc71", 
									"#27ae60", "#e67e22", "#d35400", "#3498db", "#2980b9", 
									"#e74c3c", "#c0392b", "#9b59b6", "#8e44ad", "#7f8c8d", 
									"#2c3e50", "#34495e"];

var seed = Math.floor(Math.random() * 10000000000);

$(document).ready(function(){ 
	var bg = bgRoot + seedChoice(seed, backgrounds);
	$("#home").css("background-image", "url('" + bg + "')");
});