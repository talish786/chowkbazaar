const express       = require('express')
const app           = express()
const env           = require("./config/envConfig");
const connect       = require("./config/db");
const userRoutes    = require("./routers/users/userRouters");


//connect database
connect();


app.use(express.json());

app.get("/",(req,res)=>{
    res.json({"msg":"Hello Talish Nazir"});
});


//User Routes
app.use("/api",userRoutes);

//PORT
const port          = env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Your Server is running at ${port}`);
});