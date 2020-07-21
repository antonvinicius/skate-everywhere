const express = require('express')
const mongoose = require('mongoose')
const app = express()

//#region Database connection
mongoose.connect('mongodb+srv://admin:admin@cluster0.q09rz.gcp.mongodb.net/skate_everywhere?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Database connected successufully')
});
//#endregion

const port = 3000

app.use(express.json())
app.use(require('./routes'))

app.listen(port, () => {
    console.log(`Application started at port ${port}!"`)
})