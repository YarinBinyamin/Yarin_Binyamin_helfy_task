const express = require('express');
const cors = require('cors');
// create router
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: 'Internal Server Error' });
}
);


module.exports = app;
