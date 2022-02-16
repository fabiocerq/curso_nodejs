const express = require('express')
const app = express();
const port = 3000 

app.get('/', (req, res) => {  // '/' => página principal 
                              // req => requisição => vem do cliente
                              // res => resposta => retorno da  requisição por parte da app

    res.send('Olá mundo!')    

})

app.listen(port, ()=>{
    console.log(`app rodando na porta ${port}`)
})

