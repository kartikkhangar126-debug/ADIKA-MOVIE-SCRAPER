const express = require('express');
const cors = require('cors');
const path = require('path');
const handler = require('./api/index');
const handler = require('./api/index.js'); // .js भी जोड़ें
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// API route
app.get('/api', async (req, res) => {
  // Vercel handler को Express format में कॉल करना
  try {
    await handler(req, res);
  } catch (err) {
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
