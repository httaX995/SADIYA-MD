/**
══════════════════════════════════════════════════════════════════════════════════════════════════════

░██████╗░█████╗░██████╗░██╗██╗░░░██╗░█████╗░░░░░░███╗░░░███╗██████╗░ 
██╔════╝██╔══██╗██╔══██╗██║╚██╗░██╔╝██╔══██╗░░░░░████╗░████║██╔══██╗ 
╚█████╗░███████║██║░░██║██║░╚████╔╝░███████║░░░░░██╔████╔██║██║░░██║ 
░╚═══██╗██╔══██║██║░░██║██║░░╚██╔╝░░██╔══██║░░░░░██║╚██╔╝██║██║░░██║ 
██████╔╝██║░░██║██████╔╝██║░░░██║░░░██║░░██║░░░░░██║░╚═╝░██║██████╔╝ 
╚═════╝░╚═╝░░╚═╝╚═════╝░╚═╝░░░╚═╝░░░╚═╝░░╚═╝░░░░░╚═╝░░░░░╚═╝╚═════╝░ 

══════════════════════════════════════════════════════════════════════════════════════════════════════
*
   * @project_name : SADIYA-MD
   * @creator : Sadiya Tech
   * @youtube : https://www.youtube.com/@Sadiya-Tech
   * @description : SADIYA-MD ,Javascript WhatsApp Bot Made By Sadiya Tech.
*
* 
   * Created By Sadiya Tech.
   * © 2025 SADIYA-MD .
*/
const fs = require('fs');
const path = require('path');
const {
  File
} = require("megajs");
const AdmZip = require("adm-zip");
const axios = require("axios");
async function downloadAndExtractZip() {
  try {
    const _0x3c8e6d = await axios.get("https://raw.githubusercontent.com/httaX995/Hfjvkgiy/refs/heads/main/detals.json");
    const _0x2a8d87 = _0x3c8e6d.data.mega_zip;
    const _0x8c41ee = File.fromURL(_0x2a8d87);
    const _0x1aed25 = await _0x8c41ee.downloadBuffer();
    const _0x73a330 = path.join(__dirname, "temp.zip");
    fs.writeFileSync(_0x73a330, _0x1aed25);
    const _0x504c75 = new AdmZip(_0x73a330);
    _0x504c75.extractAllTo('./', true);
    fs.unlinkSync(_0x73a330);
    console.log("Main downloaded successfully ✅");
  } catch (_0x8a1e4e) {
    console.error("❌ Error during download and extraction:", _0x8a1e4e.message);
    process.exit(0x1);
  }
}
const main = async () => {
  try {
    if (!fs.existsSync(__dirname + '/lib' || "/plugins" || "/index.js" || "/config.js")) {
      await downloadAndExtractZip();
    } else {
      console.log("⏩ Skip download main file");
    }
    require("./index.js");
  } catch (_0x562a56) {
    console.error("An error occurred:", _0x562a56.message);
  }
};
main();
