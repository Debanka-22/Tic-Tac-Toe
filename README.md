# Tic-Tac-Toe Multiplayer Game

This project is an online multiplayer Tic-Tac-Toe game with Player vs Player (PVP) and AI vs Player options. The game is built using HTML, CSS, and JavaScript.

## Features

- **Login and Registration**: Users can create accounts and log in.
- **Main Menu**: After logging in, users can choose between PVP or AI modes.
- **Player vs Player**: Players can play Tic-Tac-Toe in real-time with 2 to 5 players.
- **AI vs Player**: Single player mode where the player competes against a basic AI.
- **Player Profiles**: Each user has a customizable profile to track scores and stats.
- **Score Tracking**: Win/loss ratios are tracked for each player.
- **Responsive Design**: The game is designed to work on both desktop and mobile devices.

## File Structure

/tic-tac-toe
│
|-- welcome.html
├── index.html
├── login.html
├── registration.html
├── main-menu.html
├── pvp.html
├── ai.html
├── profile.html
├── css/
|   |-- welcome.css
│   ├── index.css
│   ├── login.css
│   ├── registration.css
│   ├── main-menu.css
│   ├── game.css
│   ├── profile.css
├── js/
│   ├── login.js
│   ├── registration.js
│   ├── main-menu.js
│   ├── pvp.js
│   ├── ai.js
│   ├── profile.js
├── img/
│   └── avatar.png
└── README.md

## Setup

1. Clone or download the repository.
2. Open `welcome.html` in a browser to access the main menu.
3. Navigate to the registration or login page to create an account.
4. Choose PVP or AI mode to start playing the game.

## Future Enhancements

- **Backend Implementation**: We will implement the backend using Node.js and WebSockets to enable real-time gameplay.
- **Database Integration**: User data, scores, and profiles will be stored in a database like MongoDB.
- **Advanced AI**: Implement a more intelligent AI using algorithms like Minimax for a greater challenge.

