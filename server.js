var express = require("express");
var bodyParser = require("body-parser");
var multer = require('multer');
var fs = require('fs');
var path = require('path');
var p = './uploads';
var app	=express();

app.use(bodyParser.json());

app.set('port', (process.env.PORT || 3001));

var storage = multer.diskStorage({
destination: function (req, file, callback) {
	callback(null, './uploads');
  },
filename: function (req, file, callback) {
	callback(null, file.originalname);
  }
});
var upload = multer({ storage : storage }).single('file');

/*
Post request to store the images Locally
*/
app.post('/image',function(req,res){
	upload(req,res,function(err) {
		if(err) {
			console.log(err);
			return res.end("Error uploading file.");
		}
		res.end("File is uploaded");
		console.log("uploadedd");
	});
});

/*
Get request to get the FILENAMES
*/
app.get('/display' , function(req,res){
	fs.readdir(p, function (err, files) {
		if (err) {
	        	return res.end("Error finding the fileNames.");
	    	} //console.log(files);var fileNames = [];
		for (var i=0; i<files.length; i++) {
		        fileNames.push(files[i]);
		 }
		 res.send(files);	 
	});
});
app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); 
});






