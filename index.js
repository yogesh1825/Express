const express = require('express')
const app = express()
app.use(express.json())

app.get('/',(req, res) => {
    res.send('Welcome to home paage')
})
app.post('/signup',(req, res) => {
    console.log(req.body);
    res.send('post successfully')
});

app.delete('/delete/:id',(req, res) => {
    console.log(req.params.id);
    res.send('delete successfully')
});

app.listen((8080),()=>{
    console.log('server listening on 8080');
})