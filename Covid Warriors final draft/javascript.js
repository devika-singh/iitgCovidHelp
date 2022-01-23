var id, Password;

function checkAndDisplay(){
	document.getElementById('select profession').style.display = "none";
	if(document.getElementById('Faculty').checked){
		document.getElementById('loginFaculty').style.display = "block";
		id = document.getElementById('fType');
		Password = document.getElementById('fPassword');
	}else if(document.getElementById('Student').checked){
		document.getElementById('loginStudents').style.display = "block";
		id = document.getElementById('sType');
		Password = document.getElementById('sPassword');
	}else if(document.getElementById('MedicalProfessional').checked){
		document.getElementById('loginMedicalHelp').style.display = "block";
		id = document.getElementById('mType');
		Password = document.getElementById('mPassword');
	}else{
		alert("No field selected");
		document.getElementById('select profession').style.display = "block";
	}
}

function shift() {
	window.open('dashboard.html','_blank');
	var date = new Date();
    date.setTime(date.getTime()+(daysToExpire*24*60*60*1000))
	document.cookie = "userid="+id+"; userPassword="+Password+"; expires="+date+"; path=/";
}
function back(){
	window.location.reload(true);
}