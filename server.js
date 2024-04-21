const express = require("express")
const app = express();
app.get("/", (req, res) => {
    console.log("Hello deployent")
    res.send("Hello")
})
app.post("/test", (req, res) => {
    console.log("Hello deployent Post PRogram")
    res.send("Hello")
})
app.listen(3000, () => {
    console.log("Server lisening")
})