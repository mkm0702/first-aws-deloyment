const express = require('express');
const app = express();

// Define a route to handle the root URL
app.get('/', (req, res) => {
  res.send('Hello, mkmk!');
});


app.get('/mkm', (req, res) => {
  res.send('Hello, mkm');
});

app.get('/piro', (req, res) =>{
  res.send('piro');
});

app.get('/anuj', (req, res) => {
  res.send('anuj');
});

// Define the port to listen on
const port = 3000;

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
