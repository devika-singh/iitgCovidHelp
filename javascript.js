function checkAndDisplay(){
	document.getElementById('select profession').style.display = "none";
	if(document.getElementById('Faculty').checked){
		document.getElementById('loginFaculty').style.display = "block";
	}else if(document.getElementById('Student').checked){
		document.getElementById('loginStudents').style.display = "block";
	}else if(document.getElementById('MedicalProfessional').checked){
		document.getElementById('loginMedicalHelp').style.display = "block";
	}else{
		alert("No field selected");
		document.getElementById('select profession').style.display = "block";
	}
}
