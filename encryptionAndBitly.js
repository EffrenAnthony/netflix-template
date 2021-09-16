const encrypter = require('object-encrypter')
const engine = encrypter('your secret', { ttl: true })
const { BitlyClient } = require('bitly')
const bitly = new BitlyClient('110ea3933b2e132275ad2cc50bfc00d21bd96ab7', {})

const obj = {
  userId: 12345,
  description: 'test description',
  valid: true,
  tags: ['encrypt', 'decrypt', 'ttl']
}

const hex = engine.encrypt(obj, 1000)
console.log(hex)
console.dir(engine.decrypt(hex))
console.log(bitly)
async function example (url) {
  const response = await bitly.shorten(url)
  console.log(response)
  console.log(`Your shortened bitlink is ${response.link}`)
}

example('https://github.com/tanepiper/node-bitly/' + hex)