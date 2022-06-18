import express from 'express'

const app = express();

const PORT:number =  5000 ;

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(PORT,()=>{
    console.log(`server running on PORT:${PORT}`);
})