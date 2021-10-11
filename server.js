const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3000;

require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout-tracker", {
    useNewUrlParser: true,
    useUnitfiedTopology: true,
    useCreateUrlParser: true,
    useFindAndModify: false
}
).then(console.log('Connected to MongoDB!'))
.catch((err) => {
    console.log(err)
    process.exit(1)
})
app.use(router);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
