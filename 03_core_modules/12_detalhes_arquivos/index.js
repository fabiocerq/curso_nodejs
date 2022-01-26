const fs = require('fs');

fs.stat("novoarquivo.txt", (err, stats) => {

    if(err) {
        console.log(err)
        return
    };

    console.log(stats.isFile()) //informa se é arquivo
    console.log(stats.isDirectory()) //informa se é diretório
    console.log(stats.isSymbolicLink()) 
    console.log(stats.ctime) //informa quando foi criado
    console.log(stats.size) //informa o tamanho em bites

})

fs.stat("pasta", (err, stats) => {

    if(err) {
        console.log(err)
        return
    };

    console.log(stats.isFile()) //informa se é arquivo
    console.log(stats.isDirectory()) //informa se é diretório
    console.log(stats.isSymbolicLink()) 
    console.log(stats.ctime) //informa quando foi criado
    console.log(stats.size) //informa o tamanho em bites

})