import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get("/", (req,res)=>{
       res.send
})

let port = process.env.PORT || 2000;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});