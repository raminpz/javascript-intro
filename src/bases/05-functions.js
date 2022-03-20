
const saludar = ( nombre = 'Ramiro' )=> `Hola ${ nombre }`


const nombre = 'Rami'

//console.log( saludar(nombre))


const getUser = () =>({
    uid: 'ACD0012', 
    username: 'Ramiro Nuñez'
})

const persona = () =>({
    nombre: 'Emi',
    apellido: 'Benz',
    edad: 19
})


console.log( getUser())
console.log( persona())
//<-------------------------------->
//
const heroes = [{
    id: 1,
    name: 'Batman'
},{
    id:2,
    name:'Superman'
}]

//const existe = heroes.some( (heroe) => heroe.id === 1); Metodo que busca si existe el id pedido en el array de heroes
const { name } = heroes.find( (heroe) => heroe.id === 1); //Tambien hace lo mismo pero muestra los datos
console.log(name)
