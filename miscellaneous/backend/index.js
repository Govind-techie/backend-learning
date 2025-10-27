const express = require("express");
const app = express();

const port = 8080;


app.get("/register", (req, res) => {
    let { user, pass } = req.query;
    res.send("standard GET response");
});


// Handling POST request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/register", (req, res) => {
    let { user, pass} = req.body; 
    res.send("standard POST response");
});

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});