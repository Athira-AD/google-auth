const express = require('express');
const app = express();

const PORT = process.env.PORT || 7000;

// Middleware
app.set('view engine', 'ejs');


app.get('/',(req, res)=>{
    res.render('index');
})

app.get('/login',(req, res)=>{
    res.render('login');
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})