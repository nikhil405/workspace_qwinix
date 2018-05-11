$(document).ready(function(){
var thehours = new Date().getHours();
	var themessage;
	var morning = 'Good morning, User';
	var afternoon = 'Good afternoon, User';
	var evening = 'Good evening, User';
	var night = 'Good night, User';

	if (thehours >= 0 && thehours < 12) {
		themessage = morning; 

	} else if (thehours >= 12 && thehours < 16) {
		themessage = afternoon;

	} else if (thehours >= 16 && thehours < 19) {
		themessage = evening;

	}else if (thehours >= 19 && thehours < 24){
		themessage = night;
	}
	$('#grtng').text(themessage);

// <-----Date and time----->
var date = new Date();
var n = date.toDateString();
var time = date.toLocaleTimeString();

document.getElementById('time').innerHTML = n + ' ' + time;


});