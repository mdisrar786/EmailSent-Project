require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/router");
const cors = require("cors")
const PORT = process.env.PORT || 8000;


// middle ware
app.use(express.json());
app.use(cors());
app.use(router)


app.listen(PORT,()=>{
    console.log(`server start at port no :${PORT}`)
})