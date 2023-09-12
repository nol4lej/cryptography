const { ec } = require("elliptic")
const curve = new ec("secp256k1")

const llavePrivada = "0x30063994a2525ab2862aa00cf9db170c437c92dc33c6e6fae43dd9bcb218487c"

// Llave publica = (llave priada * G) mod p
// el mod sae hace internamente dentro de la libreria
const publicKey = curve.g.mul(llavePrivada)

console.log("Public Key", publicKey.encode("hex"))
// version no compacta de la llave publica
// Public Key 04e116ab64611bf1ae6df3c60a4b37f06849daca3827c07f65f58160a1b37f24970c606140fa59b756289360970520e308aa2d16b22953e47a34d472f354d3a0e5

console.log("Public Key (X)", publicKey.getX().toString(16))
console.log("Public Key (Y)", publicKey.getY().toString(16))
// Public Key (X) e116ab64611bf1ae6df3c60a4b37f06849daca3827c07f65f58160a1b37f2497
// Public Key (Y) c606140fa59b756289360970520e308aa2d16b22953e47a34d472f354d3a0e5