const express = require('express');

const fast2sms = require('fast-two-sms');


const API_KEY = "zV4Kl8LSkEfZ3QtN67vHah1uJCmwjqXAMFs5xiOpPRTce2B9GrFbjte4LYoJzcXM17ZHwKdPTkDSnilA ";

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}))

app.post('/sendMsg',async (req,res)=>{
    const responce = await fast2sms.sendMessage({authorization: API_KEY,message: req.body.message,numbers: [req.body.number]});
res.send(responce);
})


app.get('/',(req,res) =>{
res.render('index.ejs')
})
app.listen(3000,()=>{
    console.log('Server listening Port 3000');
    
})