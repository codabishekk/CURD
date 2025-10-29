import express from "express"
import jobpostroute from "./routes/jobpostroute.js"
import connectDB from "./lib/db.js";


const app = express()
const PORT = 6969;

//connectDB
connectDB();

app.get('/',(req, res) =>{
    res.json({msg:"hello buddy's"})
});


//CLIENT-> MIDDLEWEAR -> SERVER
app.use('/jobpost', jobpostroute );

app.listen(PORT,() =>{
    console.log(`the server is running at http://localhost:${PORT}`);
})