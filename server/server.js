const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// 🔐 Global state (in-memory for now)
let reveal = false;

// 👉 Admin triggers this
app.post('/reveal', (req, res) => {
  reveal = true;
  res.json({ message: "Revealed successfully" });
});

// 👉 Users fetch this
app.get('/reveal', (req, res) => {
  res.json({ reveal });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});