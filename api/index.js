const express = require('express');
const app = express();
const cors = require('cors');

//app.use(express.json());

app.use(cors());

const getImages = require('./routes/routes.js');

app.use('/api', getImages);

require('./db/mysql.js');

app.listen(8080, () => {
    console.log('Connected to port 8080');
    }   
);