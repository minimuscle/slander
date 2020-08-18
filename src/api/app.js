const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");

//Create cors which allows talk to ReactJS
app.use(cors({origin: 'http://localhost:3000'}));

//Initialise body parser
app.use(bodyParser.json());

//Initialise routes
app.use('/testAPI', require('./routes/testAPI'));
app.use('/categories', require('./routes/categories'));


//Listen for requests
app.listen(process.env.port || 9000, function(){
	console.log('Listening for requests...');
});