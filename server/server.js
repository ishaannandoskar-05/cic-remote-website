const express = require('express');
const cors = require('cors');

const app = express();

// ✅ Updated CORS to only allow your Vercel frontend
app.use(cors({
  origin: ["https://cic-remote-website-bice.vercel.app", "https://cron-job.org"]
}));

app.use(express.json());

// 🔐 Global state (in-memory for now)
let reveal = false;

// 💓 Health check for cron-job.org keep-alive ping
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// 👉 Admin triggers this
app.post('/reveal', (req, res) => {
  reveal = true;
  res.json({ message: "Revealed successfully" });
});

// 👉 Users fetch this
app.get('/reveal', (req, res) => {
  res.json({ reveal });
});

// ✅ Dynamic PORT for Render
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});