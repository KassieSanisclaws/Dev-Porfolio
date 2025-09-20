const express = require('express');
const path = require('path');

const app = express();

// Serve the built files from the "dist" directory
app.use(express.static(path.join(__dirname, 'dist')));

// All other routes should point to index.html (for React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Use Heroku's port or default to 3000 locally
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
