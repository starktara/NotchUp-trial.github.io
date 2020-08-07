const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const https = require("https");

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

let today = new Date();
let tdate = today.toLocaleDateString();
let dd = today.getDate();
let mm = today.getMonth();
let yyyy = today.getFullYear();
const url = "https://script.google.com/macros/s/AKfycbzJ8Nn2ytbGO8QOkGU1kfU9q50RjDHje4Ysphyesyh-osS76wep/exec";

app.get('/', function (req, res) {
	res.render('trial-form', { today: tdate, weekLater: tdate });

	// https.get("https://script.google.com/macros/s/AKfycbzJ8Nn2ytbGO8QOkGU1kfU9q50RjDHje4Ysphyesyh-osS76wep/exec", function (response) {
	// 	console.log(response.statusCode);
	// 	response.on("data", function (data) {
	// 		console.log(data);
	// 		var wData = JSON.parse(data);
	// 	})
	// })
});

app.post('/', function (req, res) {
	console.log(req.body);
	res.render('thankyou.ejs');

});





app.listen(3000, function () {
	console.log('port at 3000');
});
