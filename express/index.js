const express = require('express');

const app = express();

app.use(express.static(__dirname));

const PORT = process.env.NODE_ENV || 3000;

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
