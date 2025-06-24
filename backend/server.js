const express = require('express');
const bodyParser = require('body-parser');  
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
