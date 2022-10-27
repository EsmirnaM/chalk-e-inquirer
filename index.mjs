import chalk from "chalk";

import inquirer from "inquirer";

inquirer.prompt([
    {
        name: 'pergunta1',
        message: 'Qual é o seu nome?'
    },
    {
        name: 'pergunta2',
        message: 'Qual é a sua idade?'
    },
])

.then ((answers) => {

    if (!answers.pergunta1 || !answers.pergunta2) {

        throw new Error('O nome e a idade são obrigatórios')
        
    }

    const response = `O seu nome é ${answers.pergunta1} e você tem ${answers.pergunta2} anos`
    console.log(chalk.bgYellow.black(response))
})

.catch((err) => console.log(err))