const numeros = [1,2,3,4,5,6]
const clonedArray = [...numeros]

console.log(clonedArray);

console.log(...numeros,...clonedArray);


const arreglo1=[1,2,3];
const arreglo2=[4,5,6]; 


const persona = {nombre:"Julio", apellido:"Contreras"}
const empleado = {...persona, carnet: "20235918"}

console.log(empleado);

console.log(Math.max(...numeros));