var bodyParser = require('body-parser');
let express = require('express');

let app = express();
var PORT = process.env.PORT || 8080;

app.get('/', function (req, res) {
    res.send('Hello World');
})

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
