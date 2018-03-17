const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
let app = express();

// Register static folder
app.use(express.static(publicPath));

// Listen on port
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
