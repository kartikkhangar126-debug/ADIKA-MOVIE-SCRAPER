const express = require('express');
const cors = require('cors');
const handler = require('./api/index.js');
const app = express();
const PORT = process.env.PORT || 3000;
const handler = require('./api/index.js'); // .js भी जोड़ें
app.use(cors());

// Render doesn't have a built-in handler like Vercel,
// so we route everything to our handler function.
app.all('/api', (req, res) => {
    // Vercel handlers expect req and res objects.
    // Express provides them, so we can just pass them.
    handler(req, res);
});

// Serve the index.html if someone hits the root (optional, good for testing)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
