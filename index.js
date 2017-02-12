let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let propFilter = require('./lib/propertyFilter');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 8080;

app.use(function(err, req, res, next) {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        res.status(400).json({
            'error': 'Could not decode request: JSON parsing failed'
        });
    }
});

app.get('/', (req, res) => {
    res.json({ message: 'Just testing API is up and running' });
});

app.post('/', (req, res) => {
    let filtered = propFilter.getFiltered(req.body.payload, 'htv', 'completed');
    res.json({ response: filtered});
});

app.listen(port);

console.log(`Hometrack test API is up and running on ${port}`);

