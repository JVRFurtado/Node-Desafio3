import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import qr from "qrcode";
import chalk from "chalk";

async function handle(err, result) {
    if (err) {
        console.log(chalk.red.italic("error on application"));
        return;
    }

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const outputDir = path.join(__dirname, "../../../output");
    const outputPath = path.join(outputDir, result.name + ".png");

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    qr.toFile(outputPath, result.link, (err) => {
        if (err) throw err;
        console.log(chalk.green("QR Code salvo em:"));
        console.log(outputPath);
    });
}

export default handle;