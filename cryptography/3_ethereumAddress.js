const { keccak_256 } = require("js-sha3")

const publicKey = "04e116ab64611bf1ae6df3c60a4b37f06849daca3827c07f65f58160a1b37f24970c606140fa59b756289360970520e308aa2d16b22953e47a34d472f354d3a0e5"

// 1- convertir la llave publica en un array de bytes
let publicKeyBytes = Buffer.from(publicKey, "hex")
// console.log(publicKeyBytes)
{/* <Buffer 04 e1 16 ab 64 61 1b f1 ae 6d f3 c6 0a 4b 37 f0 68 49 da ca 38 27 c0 7f 65 f5 81 60 a1 b3 7f 24 97 0c 60 61 40 fa 59 b7 56 28 93 60 97 05 20 e3 08 aa ... 15 more bytes> */}

// 2.- quitamos el 04 al array de bytes
publicKeyBytes = publicKeyBytes.slice(1)
// console.log(publicKeyBytes)
{/* <Buffer e1 16 ab 64 61 1b f1 ae 6d f3 c6 0a 4b 37 f0 68 49 da ca 38 27 c0 7f 65 f5 81 60 a1 b3 7f 24 97 0c 60 61 40 fa 59 b7 56 28 93 60 97 05 20 e3 08 aa 2d ... 14 more bytes> */}

// 3.- hasheo con keccak256 al array de bytes
let hash = keccak_256(publicKeyBytes)
console.log(hash)
// a0508f90fa441f8a58b8e14b8d5e4e7233841597133b09fe5459445ad7840b7f

// 4.- obtenemos los 40 ultimos caracteres y y le añadimos "0x" en el principio
const addressEthereum = "0x" + hash.slice(-40)
console.log(addressEthereum)
// 0x8d5e4e7233841597133b09fe5459445ad7840b7f