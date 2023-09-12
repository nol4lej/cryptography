const { hash,
        createIdentity,
        sign,
        recover, // recupera el address de ethereum
        recoverPublicKey
    } = require("eth-crypto")

// Creando las credenciales de Alice
const alice = createIdentity()

// Alice escribe un mensaje
const mensaje = "Este mensaje fue escrito por Alice"

// hashear mensaje
const mensajeHasheado = hash.keccak256(mensaje)

// Alice firma el mensaje hasheado
const firmaDigital = sign(alice.privateKey, mensajeHasheado)

// recuperamos la llave publica
const llavePublica = recoverPublicKey(firmaDigital, mensajeHasheado)

// Verificamos que la llave publica del mensaje hasheado y la llave publica de Alice
console.log({llavePublica, "Alice Public Key": alice.publicKey})