let nombreLufa = 'Luciano'
console.log(nombreLufa)
nombreLufa = 'Luciano Velazco'
console.log(nombreLufa)

const apellidoLufa = 'velazco'
//apellidoLufa = 'Velazco'

const variable = {nombre: "Hola", apellido: 'sape' }
console.log(variable)
variable.gato = 'Perro'
console.log(variable)

const arrayVariable = [1,2,3,4,5]
console.log(arrayVariable)
arrayVariable[0] = 'Hola'
console.log(arrayVariable)
arrayVariable.pop()
console.log(arrayVariable)
arrayVariable.push('Sape')
console.log(arrayVariable)
arrayVariable.shift()
console.log(arrayVariable)
arrayVariable.unshift('SAPE PRIMERO')
console.log(arrayVariable)
console.log('--------')
let elslice = arrayVariable.slice(0,1)
console.log('[]',elslice)
console.log(arrayVariable)
let elsplice = arrayVariable.splice(2,2)
console.log('[]',elsplice)
console.log(arrayVariable)

const numerosArr = [1,2,3,4,5]
let suma = 0
//let callBackDeSuma = (numero) => {
  //suma += numero
//}
numerosArr.forEach((numero) => {
  //suma = suma + numero
  suma += numero
}) 

console.log(suma)

let numerosArrx2 = numerosArr.map((numero) => {
  return numero*2
})

console.log(numerosArrx2)

//let numerosFiltrados = numerosArr.filter((numero) => numero%2 === 0)
let numerosFiltrados = numerosArr.filter((numero) => {
  return numero%2 === 0
})

console.log(numerosFiltrados)


let arregloDesordenado = [4,2,6,7,23,100,1]
console.log(arregloDesordenado)
// lo ordena como carpetas de windows
arregloDesordenado.sort()
//numeros
console.log(arregloDesordenado)
arregloDesordenado.sort((a,b) => a-b)
arregloDesordenado.sort((a,b) => b-a)
//strings
let arreglopalabras = ['A', 'C','B', 'E', 'D']
arreglopalabras.sort()
// objetos con string
let arreglopalabras2 = [{key: 'A'}, {key: 'C'},{key: 'B'}, {key: 'E'}, {key:'D'}]
arreglopalabras2.sort() //mal
arreglopalabras2.sort((a,b) => a.key.localeCompare(b.key))
