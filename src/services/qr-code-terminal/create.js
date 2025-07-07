import handle from "./handle.js";

async function createQRCodeTerminal(link, type) {
  await handle(null, { link, type });
}

export default createQRCodeTerminal;