const fs = require('fs');

console.log('Início');

fs.writeFile('arquivo2.txt','oi', function(err) { //assíncrono roda paralelamente
    setTimeout(function() {
        console.log("Arquivo Criado!")
    }, 2000)
});

console.log('Fim')


