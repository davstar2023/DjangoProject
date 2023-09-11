document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting by default

        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;

        if (username.trim() === '' || password.trim() === '') {
            alert('Please enter a valid ID and password.');
        } else if (username === 'Admin01' && password === 'Enter') {
            alert('Login successful!'); // You can replace this with the desired login action
            window.location.href = 'admin-home.html';
        } else {
            alert('Try again. Invalid username or password.');
        }
    });
});