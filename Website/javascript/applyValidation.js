const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const education = document.getElementById('education');
const position = document.getElementById('position');
const radioButtons = document.getElementsByName("gender");

let error = [];



form.addEventListener('submit', e =>
{
    error = [];
    checkInputs();
    if(error.length != 0){
        e.preventDefault();
    }
});

function checkInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const educationValue = education.value;
    const positionValue = position.value;
    const male = radioButtons[0];
    const female = radioButtons[1];
    const unknown = radioButtons[2];

    
    ///////////////////////////First name////////////////////////////////////
    if(firstNameValue == ''){
        setErrorFor(firstName, 'First name cannot be blank');
        error[0] = 1;
        
        
	} 
    else if(!(/^[A-Z]+$/i.test(firstNameValue))){
        setErrorFor(firstName, 'First name must only contain letters');
        error[0] = 1;
    } 
    else {
		setSuccessFor(firstName);
	}

///////////////////////////Last name////////////////////////////////////
    if(lastNameValue == ''){
        setErrorFor(lastName, 'Last name cannot be blank');
        error[0] = 1;
	} 
    else if(!(/^[A-Z]+$/i.test(lastNameValue))){
        setErrorFor(lastName, 'Last name must only contain letters');
        error[0] = 1;
    } 
    else {
		setSuccessFor(lastName);
	}

///////////////////////////Email////////////////////////////////////
    if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
        error[0] = 1;
	} 
    else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
        error[0] = 1;
	} 
    else {
		setSuccessFor(email);
	}

///////////////////////////Phone number////////////////////////////////////
    if(phoneValue ==''){
        setErrorFor(phone, 'Phone cannot be blank');
        error[0] = 1;
    }
    else if(!(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g.test(phoneValue))){
        setErrorFor(phone, 'Not a valid telephone number');
        error[0] = 1;
    }
    else{
        setSuccessFor(phone);
    }

///////////////////////////Education////////////////////////////////////
    if(educationValue == "blank"){
        setErrorFor(education, "You need to choose an option");
        error[0] = 1;
    }
    else{
        setSuccessFor(education)
    }

///////////////////////////Position////////////////////////////////////
    if(positionValue == "blank"){
        setErrorFor(position, "You need to choose an option");
        error[0] = 1;
    }
    else{
        setSuccessFor(position)
    }

///////////////////////////Gender////////////////////////////////////
    if(!(male.checked || female.checked || unknown.checked)){
        document.getElementById('gender-error').innerText = "Gender cannot be blank";
        error[0] = 1;
    }
    else{
        document.getElementById('gender-error').innerText = "";
    }
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'input-box error';
	small.innerText = message;
}
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'input-box success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}