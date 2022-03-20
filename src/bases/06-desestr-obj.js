/* Desestructuración de un objeto */
const person = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman'
}
/* Esto es desestructuración de un objeto, enves de estar usando consolo.log a monton
pero tambien se puede agregar campos y pasarlo con un valor por defecto, como esto del power */
const { name, age, codeName, power = 'No tiene poder' } = person
/* console.log( name, age, codeName, power ); */


/* Si quieres cambiar el nombre de las variables cuando las asignas mediante desestructuración, 
también puedes hacerlo de la siguiente forma: */
const moto = {
    tipo: 'Race',
    modelo: 'Yamaha MT09',
    matriculacion: 2018
};
const { tipo: type, modelo: model, matriculacion: year } = moto;

/* console.log(type, model, year); */

/* Valores por defecto, en este caso el campo smart */
const television = {
    pulgadas: 52,
    fabricante: 'LG'
};

const { pulgadas, fabricante, smart = true } = television;
/* console.log(pulgadas, fabricante, smart); */

/* El resto
En caso que el objeto tenga más propiedades que el número de variables que requerimos crear, 
podemos guardar el resto de la información en un último parámetro utilizando tres puntos. */

let mascota = {
    raza: 'perro',
    nombre: 'Max',
    edad: 8.5
};

let { raza, ...rest } = mascota;

/* console.log(raza)
console.log(rest) */

/* Tambien se usa en una funcion, este funcion crea un heroe por ejemplo, y mucho mas limpio con funcion flecha */
const createHero = ( {name, age, codeName, power = 'No tiene poder' }) =>
    ({
        id: 1215454,
        name,
        age,
        codeName,
        power
    })
    

console.log( createHero( person ) );


