

//import { owners } from "./data/heroes";

import superHeroes from "../data/heroes"



// getHeroById (id)
// funciones de Flecha

export const getHeroById = ( id ) => superHeroes.find( hero => hero.id === id)



// getHeroByOwner 'DC', 'Marvel'
export const getHeroByOwner = ( owner ) => superHeroes.filter( hero => hero.owner === owner)




/* 
Esto es otro ejemplo
import { getHeroById,getHeroByOwner } from './bases/08-imp-export'








console.log( getHeroById(2))



console.log( getHeroByOwner('Marvel')) */





