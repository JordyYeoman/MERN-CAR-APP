const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// Setup Server
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => (
    console.log(`J.A.R.V.I.S started on port: ${PORT}`)
));

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MDB_CONNECT, { 
    useUnifiedTopology: true,
    useNewUrlParser: true 
    },
    (err) => {
    if(err) return console.log(err);
    console.log("Connected to MongoDB");
});

// Set up routes
app.use("/auth", require('./routers/userRouter'));


