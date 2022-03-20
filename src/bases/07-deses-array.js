/* DESESTRUCTURACION DE ARREGLOS
 */

const characters =  ['Goku','Vegata','Trunks']


const [ g, v, t, goten='No tiene valor'] = characters

/* console.log( goten ); */

/* Tambien se desestructura a una funcion */
const returnArray = () => {
    return ['ABC', 123]
}

const [ letters, numbers ] = returnArray()

console.log( letters, numbers ); 


