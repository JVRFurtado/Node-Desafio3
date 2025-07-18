import permittedCharacters from "./utils/permitted-characters.js";

async function handle() {
    let charatcters = [];
    let password = "";

    const passwordLength = process.env.PASSWORD_LENGTH
    charatcters = await permittedCharacters();

    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * charatcters.length);
        password += charatcters[index];
    }

    return password;
}

export default handle;