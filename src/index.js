const express = require('express');
require('./db/mongoose');
const routerUser = require('../src/routers/user.js');
const routerTask = require('../src/routers/task.js');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(routerUser);
app.use(routerTask);

app.listen(port, () => {
    console.log('Server is up on port ', port);
});