//returns a pokemon object from the pokeapi
async function getPokemon(name){
    let url = "https://pokeapi.co/api/v2/pokemon/" + name.toString();

    let res = await fetch(url);
    let pokemon = await res.json();
    // console.log(pokemon);
    return pokemon;
}

//returns a type object
async function getType(name){
    let url = "https://pokeapi.co/api/v2/type/" + name.toString();

    let res = await fetch(url);
    let type = await res.json();
    return type;
}

//returns a move object
async function getMove(name){
    let url = "https://pokeapi.co/api/v2/move/" + name.toString();

    let res = await fetch(url);
    let move = await res.json();
    return move;
}

//returns a move object
async function getAbility(name){
    let url = "https://pokeapi.co/api/v2/ability/" + name.toString();

    let res = await fetch(url);
    let move = await res.json();
    return move;
}

//returns the name of the pokemon (also works for types, moves, and abilities)
const getName = (pokemon) => pokemon['name'];

//returns an array of the pokemons abilities in string form
function getPokemonAbilities(pokemon){
    let abilities = [];

    for (let ability of pokemon['abilities']){
        abilities.push(ability['ability']['name']);
    }

    return abilities;
}

//returns an array of the types the pokemon has
function getPokemonTypes(pokemon){
    let types = [];
    for (let type of pokemon['types']){
        types.push(type['type']['name']);
    }

    return types;
}

//returns an array of the moves a pokemon has
function getPokemonMoves(pokemon){
    let moves = [];
    for (let move of pokemon['moves']){
        moves.push(move['move']['name']);
    }

    return moves;
}

const getImg = (pokemon) => pokemon['sprites']['front_default'];
