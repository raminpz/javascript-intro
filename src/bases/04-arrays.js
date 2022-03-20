

const arreglo = [1,2,3,4]
arreglo.push(5) //Agrega un dato al arreglo, en este caso al final

const arreglo2 = [...arreglo] ;

arreglo2.push(6)

const arreglo3 = arreglo2.map( function(n){
    return n*2
})
 arreglo3.push(14)

console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)
