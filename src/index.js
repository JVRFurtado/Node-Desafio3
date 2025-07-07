import prompt from "prompt";

import promptSchemaMain from "./prompts-schema/prompt-schema-main.js"

import QRCode from "./services/index-services.js";
import createPassword from "./services/password/create.js";

async function main() {
    prompt.get(promptSchemaMain, async (err, choose) => {
        if (choose.select == 1) await QRCode()
        if (choose.select == 2) await createPassword();
    });

    prompt.start();
}

main();