
const persona = {
    nombre: 'Ramiro',
    apellido: 'Dark',
    edad: 35,
    direccion:{
        ciudad: 'Berlin',
        zip:2564,
        lar:14.566,
        lng:14.565
    }

}


const persona2 = { ...persona };

persona2.nombre = 'Peter'





console.log(persona)
console.log(persona2)