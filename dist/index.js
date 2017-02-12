'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var propFilter = require('./lib/propertyFilter');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

app.use(function (err, req, res, next) {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        res.status(400).json({
            'error': 'Could not decode request: JSON parsing failed'
        });
    }
});

app.get('/', function (req, res) {
    res.json({ message: 'Just testing API is up and running' });
});

app.post('/', function (req, res) {
    var filtered = propFilter.getFiltered(req.body.payload, 'htv', 'completed');
    res.json({ response: filtered });
});

app.listen(port);

console.log('Hometrack test API is up and running on ' + port);
//# sourceMappingURL=index.js.map