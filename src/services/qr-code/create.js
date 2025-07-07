import handle from "./handle.js";

async function createQRCode(link, name) {
    await handle(null, { link, name});
}

export default createQRCode;