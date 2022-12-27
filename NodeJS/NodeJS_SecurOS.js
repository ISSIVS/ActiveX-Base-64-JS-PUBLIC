const fs = require('fs');

function convertToString(filename) {
    let buff = fs.readFileSync(filename);
    let base64data = buff.toString('base64');
    return base64data;
}

function stringToFile(stringB64, filename) {
    let buff = new Buffer(stringB64, 'base64');
    fs.writeFileSync(filename, buff);
    console.log(`Base64 image data converted to file: ${filename}`);
}

let b64 = convertToString('C:/Program Files (x86)/ISS/SecurOS/skins/_common/map-server.png');
console.log('Image converted to base 64 is:\n' + b64);

stringToFile(b64, 'C:/Users/aglah/Downloads/exported.png');