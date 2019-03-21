var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// https://stackoverflow.com/questions/9765215/global-variable-in-app-js-accessible-in-routes
weight = "3.14 kg";

/*
// SERIAL PORT STUFF
// https://hackernoon.com/arduino-serial-data-796c4f7d27ce
var SerialPort = require('serialport');

const portName = '/dev/cu.usbmodem141241';

var arduinoPort = new SerialPort(portName, {
	baudRate: 115200,
	parser: SerialPort.ReadLine
});

arduinoPort.on('open', function() {
	console.log('port open...');
	arduinoPort.on('data', function(data) {
		console.log("I received: " + data);
		console.log(data);
		// var lines = data.split('\n');
		// weight = lines[lines.length - 1];
		console.log("weight set to: " + weight);
	});
});
*/

// updated version
// https://serialport.io/en/
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');

if (process.argv.length >= 3 && process.argv[2] == 'noserial') {
	weight = Math.floor(Math.random() * 1000) / 10;
} else {
	const port = new SerialPort('/dev/cu.usbmodem141241', { baudRate: 115200 }, function(err) {
		if (err) {
			console.log("error: " + err);
		}
	});

	const parser = new Readline();
	port.pipe(parser);

	parser.on('data', function(line) {
		console.log('I received: ' + line);
		line = line.replace('\r', '');
		weight = line;
		console.log('weight set to: ' + line);
		// console.log(typeof(line));
	});
}



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
