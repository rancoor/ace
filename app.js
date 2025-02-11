// app.js
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
  res.render('index', {
    name: 'John Doe', // Replace with actual name
    profession: 'IT Business Analyst',
    background: 'Tech Excellence, Product Support, Web Technology Enthusiast',
    about: 'A passionate IT professional with a strong background in business analysis, product support, and a deep interest in web technologies.',
    skills: ['Business Analysis', 'Product Support Engineering', 'Web Technologies', 'Tech Excellence'],
    contactEmail: 'contact@johndoe.com'
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
