const express = require('express');
const cors = require('cors');
const path = require('path');

// केवल एक बार handler को इम्पोर्ट करें
const handler = require('./api/index.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// API route
app.get('/api', async (req, res) => {
  try {
    await handler(req, res);
  } catch (err) {
    console.error("API Error:", err);
    res.status(500).send(err.message);
  }
});

// Static files (frontend) serve करना
app.use(express.static(path.join(__dirname, '/')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
