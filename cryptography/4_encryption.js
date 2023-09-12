const { encryptWithPublicKey, decryptWithPrivateKey } = require("eth-crypto")
const { ec } = require("elliptic")

const curve = new ec("secp256k1")
const KeyPair = curve.genKeyPair() // forma rapida de crear llave publica y privada

// console.log(KeyPair.getPrivate("hex"))
// console.log(KeyPair.getPublic("hex"))

async function encrypt(){
    const message = "Esto es una prueba"

    const msgEncrypted = await encryptWithPublicKey(
        KeyPair.getPublic("hex"),
        message
    )
    console.log(msgEncrypted)

    const msgDecrypt = await decryptWithPrivateKey(
        KeyPair.getPrivate("hex"),
        msgEncrypted
    )

    console.log(msgDecrypt)

}
encrypt()
