const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Set static folder
app.use('/static', express.static(path.join(__dirname, 'public/static')));
app.use(express.static(path.join(__dirname, 'public')));

// Serve HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

// Handle contact form (optional)
app.post('/contact', express.urlencoded({ extended: true }), (req, res) => {
  console.log('Contact Form Data:', req.body);
  res.send('<h2>Thank you for contacting me!</h2><a href=\"/\">Go Back</a>');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
