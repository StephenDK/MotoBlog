// Dependencies
// ==============================================
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// ==============================================

// Express instance 
const app = express();

// Database Connection
// ==============================================
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/motoblog";

mongoose.connect(MONGO_URI);
mongoose.connection
.once('open', () => console.log("Connected to the database"))
.on('error', (error) => {
    console.log("Warning", error);
});
// ==============================================

// Middleware
// ==============================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("client/build"));
// ==============================================



// Routes
// ==============================================
require('./routes/new-post')(app);
// ==============================================

// Port 
const PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log("Application listening on " + PORT + " localhost");
});






