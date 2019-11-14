console.log('Ejercicio 1');//Ejercicio1

class Equipo {
    constructor(name, anotacion){
        this.name = name;
        this.anotacion = anotacion;
        this.media = this.calcMedia(anotacion);
    }

    calcMedia(array){
        let suma = 0;
        for(const element of array){
            suma += parseInt(element);
        }
        console.log(`La media del equipo de ${this.name} es de ${suma/array.length}`);
        return suma/array.length;
    }

    static calcMejorEquipo(array){
        let valor = 0;
        let name = "";
        for(const element of array){
            if(valor < element.media){
                valor = element.media;
                name = element.name
            }
        }
        console.log(`El equipo de ${name} tiene la máxima media con ${valor} puntos por partido`);
        return valor;
    } 

}

const equipo_Sara = new Equipo("Sara", [89, 120, 103]);
const equipo_Laura = new Equipo("Laura", [116, 94, 123]);
const equipo_Maria = new Equipo("Maria", [97, 134, 105]);
const equipos = [equipo_Sara, equipo_Laura, equipo_Maria];
Equipo.calcMejorEquipo(equipos);


console.log('Ejercicio 2');//Ejercicio2

const cuenta = [124, 58, 268];

function calcPropina(array){
    const propinas = [];
    for(const element of array){
        if(element < 50){
            propinas.push(element*0.2);
        }else if(element > 200){
            propinas.push(element*0.1);
        }else{
            propinas.push(element*0.15);
        }
    }
    return propinas;
}

const propinas = calcPropina(cuenta);

function calculo(array1, array2){
    const total = [];
    for(let i = 0; i< array1.length; i++){
        total.push(array1[i] + array2[i]);
    }

    return total;
}

console.log(calculo(cuenta, propinas));

console.log('Ejercicio 3');//Ejercicio 3 

let nums = [100, 3, 4, 2, 10, 4, 1, 10];

function ordenar(array){
    let aux = 0;
    let aux2 = 0;
    for(let i=0; i<array.length; i++){
        for(let j=0; j<array.length; j++){
            if(array[j] > array[j+1]){
                aux = array[j];
                array[j] = array[j+1];
                array[j+1] = aux;
            }
        }
    }

    return array;
}

console.log(ordenar(nums));
console.log(nums.sort(function(a, b) {return b - a;}));

console.log('Ejercicio 4');//Ejercicio 4

/*const number1 = parseInt(prompt("Envia un número uno"));
const number2 = parseInt(prompt("Envia un número dos"));
const restar = (numero1, numero2) => {
    return Math.abs(numero1 - numero2);
} 
window.alert(restar(number1, number2));*/