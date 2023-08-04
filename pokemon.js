//returns a pokemon object from the pokeapi
async function getPokemon(name){
    let url = "https://pokeapi.co/api/v2/pokemon/" + name;

    let res = await fetch(url);
    let pokemon = await res.json();
    // console.log(pokemon);
    return pokemon;
}

//returns the name of the pokemon
const getName = (pokemon) => pokemon['name'];

//returns an array of the pokemons abilities in string form
function getAbilities(pokemon){
    let abilities = [];

    for (let ability of pokemon['abilities']){
        abilities.push(ability['ability']['name']);
    }

    return abilities;
}

//returns an array of the types the pokemon has
function getTypes(pokemon){
    let types = [];
    for (let type of pokemon['types']){
        types.push(type['type']['name']);
    }

    return types;
}

//returns an array of the moves a pokemon has
function getMoves(pokemon){
    let moves = [];
    for (let move of pokemon['moves']){
        moves.push(move['move']['name']);
    }

    return moves;
}