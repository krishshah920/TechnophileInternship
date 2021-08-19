function validate() {  
	var result = "";	
	result += validateName(); 	
	result += validateEmail();
	result += validateTerms();
	
	if (result == "") return true;
	
	alert("Validation Result:\n\n" + result);
	return false;	
}

function validateName() {
	var name = document.getElementsById("nam")[0].value;
	if (name.length <= 3)
		return "Name should be at least three characters.\n";	
	return "";
}

function validateEmail() {
	var email = valueOf("email");
	var retype = valueOf("retype_email");
	
	if (email.indexOf('@') == -1) 
		return "Email should be a valid address.\n";
	
	if (email != retype)
		return "Email addresses do not match.\n";
	return "";	
}

function validateTerms() {
	var terms = document.getElementsByName("check")[0];
	if (!terms.checked)
		return "Please accept the Terms of Service and Privacy Policy";	
	return "";
}

function valueOf(name) {
	return document.getElementsByName(name)[0].value;
}
