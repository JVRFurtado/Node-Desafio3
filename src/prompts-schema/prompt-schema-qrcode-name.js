import chalk from "chalk";

const promptSchemaQRCodeName = [
    {
        name: "name",
        description: chalk.yellow("Escolha o nome do arquivo"),
        message: chalk.red.italic("Escolha o nome do arquivo"),
        required: true
    }
];

export default promptSchemaQRCodeName