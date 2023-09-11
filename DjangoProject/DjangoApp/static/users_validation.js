document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;

        if (username.trim() === '' || password.trim() === '') {
            event.preventDefault();
            alert('Please enter a valid username and password.');
        } else if (!/^[a-zA-Z0-9]+$/.test(username) || password.length < 6) {
            event.preventDefault();
            alert('Please enter a valid username (only alphabets and numerals allowed) and a password of at least 6 characters.');
        } else {
            // All conditions met, redirect to the user home page (replace 'user-home.html' with the actual URL)
            window.location.href = 'users.html';
        }
    });
});