document.getElementById('loginForm').addEventListener('submit', function(e) {
	e.preventDefault();
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;
	if (username && password) {
		localStorage.setItem('username', username);
		window.location.href = "main-menu.html";
	}
});