window.onload = function() {
    const username = localStorage.getItem('username');
    document.getElementById('username').innerText = username ? username : 'Player';
};
function startPvP() {
    window.location.href = "pvp.html";
}
function startAI() {
    window.location.href = "ai.html";
}