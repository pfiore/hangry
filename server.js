var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Result = require('./app/models/result');

var mongoose   = require('mongoose');
mongoose.connect('mongodb://hangrytest:yrgnah666@ds025742.mlab.com:25742/hangrytest');

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

// on routes that end in /results
// ------------------------------
router.route('/results')
    .post(function(req, res) {

        var result = new Result(); // create new Result instance
        result.name = req.body.name; // set result name

        // save result and check for errors
        result.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Result created!' });
        });
    });

app.use('/api', router);
//app.use(express.static('dist'));

app.listen(port);
console.log('listening on port', port);
