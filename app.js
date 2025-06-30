const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Button Layout</title>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <div class="top-buttons">
        <button class="blue">BLUE BUTTON</button>
        <button class="red">RED BUTTON</button>
        <button class="green">GREEN BUTTON</button>
      </div>

      <div class="main-text">
        Write the code for this screen
      </div>

      <div class="bottom-buttons">
        <button class="blue">BLUE BUTTON</button>
        <button class="red">RED BUTTON</button>
        <button class="green">GREEN BUTTON</button>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log("`Server running at http://localhost:\${PORT}\`");
});
