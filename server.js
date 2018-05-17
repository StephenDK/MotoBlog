// Dependencies
// ==============================================
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// ==============================================





// Express instance 
const app = express();





// Routes
// ==============================================

// ==============================================

// Port 
const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log("Application listening on " + PORT + " localhost");
});






