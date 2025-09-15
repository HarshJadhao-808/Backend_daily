import crypto, { randomBytes } from 'crypto'


let password = "jkl123"

let data=crypto.createHash("sha256").update(password).digest("hex")

console.log(data)


let token = randomBytes(16).toString("hex")

console.log(token)