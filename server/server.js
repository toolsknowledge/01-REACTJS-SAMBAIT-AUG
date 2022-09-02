//import modules
//require() function used to import the modules
const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");


//create rest object
const app = express();
//where "app" is the rest object
//where "app" object used to develop the rest api's
//GET,POST,PUT,DELETE,...



//enable cors policy
app.use(cors());


//set the JSON as MIME Type
app.use(express.json());














