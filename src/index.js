import express from 'express'
import cors from 'cors'
const app = express();
app.use(express.json());
app.use(cors('*'))
app.listen(8081);
app.get('/',(req,res)=>{
    console.log('get response');
    
    res.send('Thành công!')
})

app.get('/use',(req,res)=>{
    try {
        console.log(req);
        
        res.send('Api đã hoạt ddongoo!');
    } catch (error) {
        res.send('Lỗi rồi')
    }
})
console.log('server is running');
