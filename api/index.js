const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const imagesRoutes = require('./routes/image.js');

app.use('/api', imagesRoutes);


require('./db/mysql.js');

app.listen(8080, () => {
    console.log('Connected to port 8080');
    }   
);