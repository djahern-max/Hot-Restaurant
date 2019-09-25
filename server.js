let bodyParser = require('body-parser');
let express = require('express');
let path = require('path');

let app = express();
let PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

require('./routes/apiRoutes.js')(app);
require('./routes/htmlRoutes.js')(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});


