const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routers/FormRoutes');

const app = express();
const port = process.env.PORT || 5000;

//username 
// shreyashkoli4141

// password
// K2CwIrr4F3AxY4hM

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/thankyou', routes);

// Database Connection
mongoose.connect('mongodb+srv://shreyashkoli4141:K2CwIrr4F3AxY4hM@contactdetails.zbirm.mongodb.net/?retryWrites=true&w=majority&appName=ContactDetails', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
    .then(() => {
        console.log("Database Connected Successfully");
        // Start server after successful DB connection
        app.listen(port, () => {
            console.log(`Server is Running on http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.error("Database Connection Failed", err);
    });

// Handle undefined routes
app.use((req, res) => {
    res.status(404).send("Route not found");
});
