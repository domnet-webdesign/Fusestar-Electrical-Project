



function formValidation() {

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    var subject = document.getElementById('subject').value;
    var text;

    var error_message = document.getElementById('error-message')

    error_message.style.color = "white";
    error_message.style.backgroundColor = "#003674";
    error_message.style.padding = "10px";
    error_message.style.margin = "10px";
    error_message.style.borderRadius = "30px";
    error_message.style.fontSize = "1rem";
    error_message.style.textAlign = "center";
    

    if(name.length < 8 ) {
        text = "Please Name should contain First and Last Name";
       error_message.innerHTML = text;
       return false;
    }

    if(email.length === ' ' ) {
        text = "Please Enter a valid Email Address";
       error_message.innerHTML = text;
       return false;
    }
    if(subject.length === ' ' ) {
        text = "Please Enter a Subject";
       error_message.innerHTML = text;
       return false;
    }
    if(isNaN(phone.length) || phone.length < 11 ) {
        text = "Please enter a valid Phone Number";
       error_message.innerHTML = text;
       return false;
    }
    if(message.length === ' ' || message.length > 200 ) {
        text = "Message should not exceed 200 character";
       error_message.innerHTML = text;
       return false;
    }
    if(message.length === ' ' || message.length > 200
     || name.length < 8 || email.length === ' ' || isNaN(phone.length) || phone.length <= 11 ) {
        text = "Thanks for Subscribing for our Newsletter";
       error_message.innerHTML = text;
       return true;
    }
    

}