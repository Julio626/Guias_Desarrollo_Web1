function calcularDistanciaOrigen(x,y){
    return Math.sqrt(x*x + y*y);
}

console.log(calcularDistanciaOrigen(5,5));

const calcularDistanciaEntrePuntos = (x1,y1,x2,y2) => Math.sqrt((x2-x1)**2+(y2-y1)**2)
console.log(calcularDistanciaEntrePuntos(5,5,0,0))

function calcularPuntoPendiente(x,y,m){
    let terminoIndependiente=m*x+y;
    return `y=${m}x+${terminoIndependiente}`;
}

console.log(calcularPuntoPendiente(2,4,2))


function sumar(...numeros){
    let resultado=0;
    for (num of numeros){
        resultado +=num;
    }
    return resultado;
}

console.log(sumar(7,7,777,7,7,7,7,7,7))


//programación funcional

const pares =[2,4,6,8,10]

const cuadradoPares = pares.map(x => x**2);

console.log(cuadradoPares)

const numeros = [1,2,3,4,5,6]

const arregloPares = numeros.filter(item => item % 2 === 0);

console.log(arregloPares)