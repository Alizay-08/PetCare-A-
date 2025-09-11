// LOGIN FORM VALIDATION
document.getElementById('loginForm').addEventListener('submit', function(e){
    e.preventDefault(); // prevent default submit

    // form fields
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    let valid = true;

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.value.match(emailPattern)){
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Password validation: 8+ chars, upper, lower, number, special char
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!password.value.match(passwordPattern)){
        document.getElementById('passwordError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('passwordError').style.display = 'none';
    }

    if(valid){
        // Form is valid, proceed with submit or AJAX
        alert('Login successful!'); // placeholder
        // this.submit(); // uncomment if actual form submission needed
    }
});
