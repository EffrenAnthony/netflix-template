var key = 'real secret keys should be long and random';
 
// Create an encryptor:
var encryptor = require('simple-encryptor')(key);

var encrypted = encryptor.encrypt({a:'hola', b:'hola'});
// Should print gibberish:
console.log('encrypted: %s', encrypted);

var decrypted = encryptor.decrypt(encrypted);
// Should print 'testing'
console.log('decrypted: %s', decrypted);

var myHmac = encryptor.hmac('testing');

console.log(myHmac);
var decryptedHmac = encryptor.decrypt(myHmac);
// Should print 'testing'
console.log('decrypted  myHmac: %s', decryptedHmac);
// nested object:
var obj = {
  foo: {
    bar: [1, "baz"]
  }
};
var objEnc = encryptor.encrypt(obj);
// Should print gibberish:
console.log('obj encrypted: %s', objEnc);
var objDec = encryptor.decrypt(objEnc);
// Should print: {"foo":{"bar":[1,"baz"]}}
console.log('obj decrypted: %j', objDec);