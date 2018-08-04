const express = require('express');

const api     = require('./api.js');
const app     = express();

app.use(api);


// 開啟port 3000
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Today Film Server Has Started! http://localhost:${port} port`);
});