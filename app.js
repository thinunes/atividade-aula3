const express = require('express');

const app = express();





app.get('/', (req, res)=>{
    
        res.send('Olá mundo ola ola')

    
       
   
    

})


app.get('/produtos', (req,res)=>{
    res.send('essa é a rota de produtos mais legais')
})


app.listen(3001, ()=>{console.log("Servidor online")})
