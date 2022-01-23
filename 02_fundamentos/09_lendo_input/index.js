const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Qual sua linguagem preferida? ", (language) => {

    if (language === 'Dolphin') {
        console.log('Brincadeira tem hora!')
    } else {
        console.log(`Minha linguagem favorita é: ${language}`)
    }
    readline.close();

})
