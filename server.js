var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;


// ROUTES
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    //do logging
    console.log('Something is happening.');
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'yo'});
});

router.route('/loc')
    .post(function(req, res) {
    });

app.use('/api', router);
app.use(express.static('dist'));

app.listen(port);
console.log('listening on port ' + port);
