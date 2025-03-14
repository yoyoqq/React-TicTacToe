# React Tic-Tac-Toe Game
A simple, interactive Tic-Tac-Toe game built with React.


ACCESS THE GAME HERE: https://tictactoe-yagol.vercel.app/

## Features

- Interactive game board
- Turn-based gameplay (X and O alternating)
- Win detection
- Draw detection
- Game reset functionality

## Project Structure

```
tic-tac-toe/
├── src/
│   ├── Components/
│   │   └── TicTacToe/
│   │       ├── TicTacToe.jsx
│   │       └── TicTacToe.css
│   ├── Assets/
│   │   ├── circle.png
│   │   └── cross.png
│   ├── App.jsx
│   └── index.jsx
```

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Navigate to the project directory:
```bash
cd tic-tac-toe
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

## How to Play

1. The game starts with Player X
2. Click on any empty square to make a move
3. Players alternate turns between X and O
4. The game ends when:
   - A player gets three in a row (horizontal, vertical, or diagonal)
   - All squares are filled (draw)
5. Click the "Reset" button to start a new game

## Technologies Used

- React
- JavaScript (ES6+)
- CSS3
- Vite

## Requirements

- Node.js >= 14.0.0
- npm >= 6.0.0

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
