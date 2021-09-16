var encrypter = require('object-encrypter');
var engine = encrypter('url', {ttl: false});

var obj = {
	userId: 'asdf93920939',
  email: 'corre@mail.com'
};

var hex = engine.encrypt(obj, 5000); // generated string will live 5 seconds
console.log(hex);
// ->
// 'eyJ1c2VySWQiOjEyMzQ1LCJkZXNjcmlwdGlvbiI6InRlc3QgZGVzY3JpcHRpb24iLCJ2YWxpZCI6dHJ1ZSwidGFncyI6WyJlbmNyeXB0IiwiZGVjcnlwdCIsInR0bCJdLCJleHBpcmVzIjoxNDEwNjkyODQ3NTU2fQo4ZTczNjhkMDc2ZWZhZWNlMGViYjYzYTAxOTBhNzU5Yw'

console.dir(engine.decrypt('fvwoYlzX5ffZKrG9UYDxoGzbVxeHlWH6S/u6uYmYX93GiM+NuyE3gfCmlhiRVr1piyqjfCinHg6Z3AfT5ya5/T8AFmHBYt4F2uNQowySY7v+gFdXqK8VBiWfXhEiSymBkESqWyVwj/eJFIjb2qdFeV1oKSHdf0y++QMqdhS8mro='));
// 'fvwoYlzX5ffZKrG9UYDxoGzbVxeHlWH6S/u6uYmYX93GiM+NuyE3gfCmlhiRVr1piyqjfCinHg6Z3AfT5ya5/T8AFmHBYt4F2uNQowySY7v+gFdXqK8VBiWfXhEiSymBkESqWyVwj/eJFIjb2qdFeV1oKSHdf0y++QMqdhS8mro='
// ->
// { userId: 12345,
// description: 'test description',
// valid: true,
// tags: [ 'encrypt', 'decrypt', 'ttl' ],
// expires: 1410692847556 }
const objetoDeInvitacion = {
  email: 'tony@mail.com',
  idWorkspace: '213ssaofjiasn',
  open: true,
}
// ......... FRONTEND

// const urlParam = '...invite/7HFI9323rsa'
// const objectInvitation = decrypt(urlParam) 

// if(objectInvitation.open === true){
//   // currentUserEmail => context REACT
//   await addMember(objectInvitation.idWorkspace, currentUserEmail)
// }else{
//   if (objetoDeInvitacion.email === currentUserEmail) {
//     await addMember(objectInvitation.idWorkspace, currentUserEmail)
//   }else {
//     throw new Error('Parece que no estas invitado a este workspace')
//   }
// }

// .....BACKEND
// const addMember = (idWorkspace, email) => {
//   // user = search user by email
//   // update adding user to idWorkspace
// }
// const sendInvitation = (idWorkspace, email, open) => {
  
// }