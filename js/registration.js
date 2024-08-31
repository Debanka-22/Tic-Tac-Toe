document.getElementById('registrationForm').addEventListener('submit', function(e) {
	e.preventDefault();
	const username = document.getElementById('username').value;
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	if (username && email && password) {
		localStorage.setItem('username', username);
		localStorage.setItem('email', email);
		window.location.href = "login.html";
	}
});