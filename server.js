const express = require('express');
const bp = require('body-parser');
const path = require('path');
const htmlRoutes = require('./app/routing/htmlRoutes.js');
const apiRoutes = require('./app/routing/apiRoutes.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());


app.get('/', htmlRoutes.home);
app.get('/survey', htmlRoutes.survey);
app.get('/api/friends', apiRoutes.showAll)
app.post('/api/friends', apiRoutes.recieve)

app.listen(PORT, () => {
    console.log("I'm listening on port: "+ PORT)
})