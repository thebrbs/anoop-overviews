const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3003;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {

});


app.listen(port, () => console.log(`Overview module listening on port ${port}`));