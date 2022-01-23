const chalk = require('chalk');

const nota = 10

if (nota >= 7) {
    console.log(chalk.green.bold("Parabéns! Você foi aprovado!"))    
} else {
    console.log(chalk.bgRed.yellow.bold("Você foi reprovado!"))
}

//bgCor = muda cor do backgorund