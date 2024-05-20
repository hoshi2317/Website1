function submitForm(event) {
    event.preventDefault();
    
    // Retrieve username and password from form
    var username = document.getElementById('username').value;

    // Perform login validation here
    // For simplicity, assume login is successful
    var loginSuccessful = true;

    if (loginSuccessful) {
        // Send login details to email (replace with your own logic)
        sendEmail(username);
        alert('SELAMAT DATANG.');
        // Redirect to another page after successful login
        window.location.href = 'dashboard.html';
    } else {
        alert('Login failed. Please try again.');
    }
}

function sendEmail(username) {
    // Logic to send email (using AJAX or server-side scripting like PHP)
    // Example: You can use AJAX to send login details to a PHP script which will send an email
}
