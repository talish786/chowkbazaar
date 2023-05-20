const express       = require('express')
const app           = express()
const env           = require("./config/envConfig");
const connect       = require("./config/db");
const userRoutes    = require("./routers/userRouters");
const categoryRoutes= require("./routers/categoryRoutes");
const cors          = require("cors");
//connect database
connect();


app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.json({"msg":"Hello Talish Nazir"});
});


//User Routes
app.use("/api",userRoutes);

app.use("/api/category",categoryRoutes);

//PORT
const port          = env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Your Server is running at ${port}`);
});