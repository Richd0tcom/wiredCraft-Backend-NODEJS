import express from 'express';
import {connection} from './db.config';
import router from './routes/routes';


const app = express();

connection(); 

const PORT:number =  3000 ;


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/user', router);



app.listen(PORT,()=>{
    console.log(`server running on PORT:${PORT}`);
})