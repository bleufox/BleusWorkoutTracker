const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require('path');
const router = require('./routes');
const PORT = process.env.PORT || 3000;

require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnitfiedTopology: true,
    useCreateUrlParser: true,
    useFindAndModify: false
}
);

// routes
app.use(require("./routes/api.js"));
app.use(require('./routes/html.js'))

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
