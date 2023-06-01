const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.static('public'));
app.use(cors());

// GET /api/pieces route to retrieve the pieces
app.get('/api/pieces', (req, res) => {
  const pieces = [
    {
      id: 1,
      name: 'King',
      description: 'The most important piece in the game',
      value: 1000,
      image: '/assets/images/king.png'
    },
    {
      id: 2,
      name: 'Queen',
      description: 'A versatile and powerful piece',
      value: 500,
      image: '/assets/images/queen.png'
    },
    {
      id: 3,
      name: 'Rook',
      description: 'A piece that moves in a straight line',
      value: 300,
      image: '/assets/images/rook.png'
    },
    {
      id: 4,
      name: 'Bishop',
      description: 'A piece that moves diagonally',
      value: 200,
      image: '/assets/images/bishop.png'
    },
    {
      id: 5,
      name: 'Knight',
      description: 'A piece that moves in an "L" shape',
      value: 150,
      image: '/assets/images/horse.png'
    },
    {
      id: 6,
      name: 'Pawn',
      description: 'The basic piece of the game',
      value: 100,
      image: '/assets/images/pawn.png'
    }
  ];

  res.json(pieces);
});

// Start the server on port 5000
app.listen(5000, () => {
  console.log('Server started on port 5000');
});
