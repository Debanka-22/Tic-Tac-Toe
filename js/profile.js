// DOM Elements
const avatarImages = document.querySelectorAll('.avatar-options img');
const displayNameInput = document.getElementById('display-name');
const saveButton = document.getElementById('save-profile');
const profileAvatar = document.getElementById('profile-avatar');
const profileName = document.getElementById('profile-name');

// Default Values from LocalStorage
window.addEventListener('DOMContentLoaded', () => {
    const savedAvatar = localStorage.getItem('avatar');
    const savedName = localStorage.getItem('displayName');
    
    if (savedAvatar) {
        profileAvatar.src = savedAvatar;
    }

    if (savedName) {
        profileName.textContent = savedName;
        displayNameInput.value = savedName;
    }
});

// Avatar Selection
avatarImages.forEach(img => {
    img.addEventListener('click', () => {
        avatarImages.forEach(img => img.classList.remove('selected'));
        img.classList.add('selected');
        profileAvatar.src = img.src;
        localStorage.setItem('avatar', img.src);
    });
});

// Save Profile Customization
saveButton.addEventListener('click', () => {
    const displayName = displayNameInput.value.trim();

    if (displayName !== '') {
        profileName.textContent = displayName;
        localStorage.setItem('displayName', displayName);
        alert('Profile updated successfully!');
    } else {
        alert('Please enter a valid display name.');
    }
});
