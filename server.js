const express = require('express');
const { setupRouter } = require('./src/router');

const app = express();
const PORT = 3000;

// Set up custom router
//setupRouter(app);

app.get('/', (req, res) => {
  return res.send('Hello World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});