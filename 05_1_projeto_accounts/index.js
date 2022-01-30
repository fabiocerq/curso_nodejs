//módulos externos
const chalk = require('chalk')
const inquirer = require('inquirer')

//módulos internos
const fs = require('fs')

operation();

function operation() {
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: "O que você deseja fazer?",
        choices: [
            'Criar Conta',
            'Consultar Saldo',
            "Depositar",
            "Sacar",
            'Sair'
        ],
    },
    ])
        .then((answer) => {
            const action = answer['action']

            if (action === 'Criar Conta') {
                createAccount();
            } else if (action === 'Consultar Saldo') {
                getAccountBalance();
            } else if (action === 'Depositar') {
                deposit();
            } else if (action === 'Sacar') {
                withdraw();
            } else if (action === 'Sair') {
                console.log(chalk.bgBlue.black("Obrigado por usar o Accounts!"))
                process.exit();
            }
        })
        .catch((err) => console.log(err))
}

//criar conta
function createAccount() {
    console.log(chalk.bgGreen.black('Parabéns por escolher nosso banco!'))
    console.log(chalk.green('Defina as opções da sua conta a seguir:'))
    buildAccount();
}

function buildAccount() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Digite um nome para sua conta:'
        },
    ]).then(answer => {

        const accountName = answer['accountName']
        console.info(accountName)

        if (!fs.existsSync('accounts')) {
            fs.mkdirSync('accounts')
        }

        if (fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(chalk.bgRed.black("Esta conta já existe. Escolha outro nome!"))
            buildAccount();
            return;
        }

        fs.writeFileSync(
            `accounts/${accountName}.json`,
            '{"balance": 0}',
            function (err) {
                console.log(err)
            })

        console.log(chalk.green('Parabéns! Sua conta foi criada!'))
        operation();
    })
        .catch(err => console.log(err))
}

//depositar saldo

function deposit() {
    inquirer.prompt([{
        name: 'accountName',
        message: 'Qual o nome da sua conta?'
    }
    ]).then((answer) => {

        const accountName = answer['accountName']

        //verificando se a conta existe
        if (!checkAccount(accountName)) {
            return deposit();
        }

        inquirer.prompt([{
            name: 'amount',
            message: 'Quanto você deseja depositar?'
        },
        ]).then((answer) => {

            const amount = answer['amount']

            addAmount(accountName, amount);
            operation();

        }).catch(err => console.log(err))


    })
        .catch(err => console.log(err))
}

//verificação de existência de conta

function checkAccount(accountName) {
    if (!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black("Esta conta não existe. Escolha outro nome!"))
        return false;
    }
    return true;
}

//adicionando saldo
function addAmount(accountName, amount) {

    const accountData = getAccount(accountName);
    console.log(accountData);

    if (!amount) {
        console.log(chalk.bgRed.black('Ocorreu um erro. Tente novamente mais tarde.'))
        return deposit();
    }

    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance);

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err) {
            console.log(err)
        }
    )

    console.log(chalk.green(`Foi depositado R$${amount} na sua conta!`))
}

//acessando conta
function getAccount(accountName) {
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf-8', //permitindo caracteres especiais brasieliros
        flag: 'r' //apenas ler arquivo
    })

    return JSON.parse(accountJSON);
}

//mostrar saldo
function getAccountBalance() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual nome da sua conta?'
        }
    ]).then((answer) => {

        const accountName = answer['accountName']
        //verificar existência da conta
        if (!checkAccount(accountName)) {
            return getAccountBalance();
        }

        const accountData = getAccount(accountName)

        console.log(chalk.bgBlue.black(`O saldo da sua conta é R$${accountData.balance}!`));

        operation();
    })
    .catch(err => console.log(err))
}

//sacando dinheiro
function withdraw() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual nome da sua conta?'
        }
    ]).then((answer) => {
        const accountName = answer['accountName']

        if (!checkAccount(accountName)) {
            return withdraw();
        }

        inquirer.prompt ([
            {
                name: 'amount',
                message: 'Quantos você deseja sacar?'
            }
        ]).then((answer) => {

            const amount = answer['amount']
            
            removeAmount(accountName, amount)
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
}

function removeAmount(accountName, amount) {

    const accountData = getAccount(accountName);
    if(!amount) {
        console.log(chalk.bgRed.black('Ocorreu um erro. Tente novamente mais tarde.'))
        return withdraw();
    }

    if(accountData.balance < amount) {
        console.log(chalk.bgRed.black('Valor indisponível!'))
        return withdraw();
    }

    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount);

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err) {
            console.log(err)
        }
    )

    console.log(chalk.green(`Foi realizado um saque de R$${amount} da sua conta!`))
    operation();
}

