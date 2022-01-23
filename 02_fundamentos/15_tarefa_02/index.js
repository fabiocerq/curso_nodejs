const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer
    .prompt([
        {
            name: 'nome',
            message: 'Qual seu nome? '
        },
        {
            name: 'idade',
            message: 'Qual sua idade? '
        }
    ])
    .then((answers) => {

        const idade = parseInt(answers.idade);

        if(answers.idade < '18') {
            throw new Error ("Cadastro não concluído! Não pode dirigir!")
        }

        console.log(chalk.bgYellow.black(`Seu nome é ${answers.nome}, você tem ${answers.idade} anos e pode dirigir!`));
     })
     .catch(err => console.log(err));


