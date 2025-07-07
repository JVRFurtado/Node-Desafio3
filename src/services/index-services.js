import prompt from "prompt";
import promptSchemaQRCode from "../prompts-schema/prompt-schema-qrcode.js";
import promptSchemaQRCodeName from "../prompts-schema/prompt-schema-qrcode-name.js";
import createQRCode from "./qr-code/create.js";
import createQRCodeTerminal from "./qr-code-terminal/create.js";

async function QRCode() {
  const { type, link } = await prompt.get(promptSchemaQRCode);

  if (type === "1") {
    const { name } = await prompt.get(promptSchemaQRCodeName);

    await createQRCode(link, name);
  }
  if (type === "2") await createQRCodeTerminal(link, type);
}

export default QRCode;