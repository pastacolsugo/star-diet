var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.sendFile(path.join(__dirname, '../../index.html'));
});

router.get('/style.css', function(req, res, next){
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.sendFile(path.join(__dirname, '../../style.css'));
});

router.get('/butter', function(req, res, next){
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.sendFile(path.join(__dirname, '../../butter.html'));
});

router.get('/star-diet', function(req, res, next){
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.sendFile(path.join(__dirname, '../../butter.html'));
});

router.get('/Roboto.ttf', function(req, res, next){
	res.setHeader('Access-Control-Allow-Origin', '*');	
	res.sendFile(path.join(__dirname, '../font/Roboto/Roboto-regular.ttf'));
})

router.get('/butter.css', function(req, res, next){
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.sendFile(path.join(__dirname, '../../butter.css'));
});

router.post('/weight', function(req, res, next) {
	// let peso = Math.floor(Math.random() * 100);
	res.setHeader('Access-Control-Allow-Origin', '*');

	res.send({weight : weight});

	if (process.argv.length >= 3 && process.argv[2] == 'noserial') {
		weight = Math.floor(Math.random() * 1000) / 10;
	}
});

module.exports = router;
