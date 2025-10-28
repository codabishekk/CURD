import express from "express"

const app = express()
const PORT = 6969;

app.get('/',(req, res) =>{
    res.json({msg:"hello buddy's"})
});

app.listen(6969,() =>{
    console.log(`the server is running at http://localhost:${PORT}`);
})