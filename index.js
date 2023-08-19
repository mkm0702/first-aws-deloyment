const express = require('express');
const app = express();

// Define a route to handle the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.get('/mkm', (req, res) => {
  res.send('Hello, mkm');
});

// Define the port to listen on
const port = 3000;

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
