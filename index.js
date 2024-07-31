import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get("/", (req,res)=>{
       res.send('hello world')
})

app.get("/ping", (req,res)=>{
    res.send('pong')
})
let port = process.env.PORT || 2000;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});