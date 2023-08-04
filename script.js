let eevee;
let pokemon = [];
window.onload = async function () {
    eevee = await getPokemon("eevee");
    if(getTypes(eevee).includes('normal')){
        console.log("LESSS GOOOO");
    }

    for (let i = 1; i <= 1008; i++){
        pokemon.push(getName(await getPokemon(i)));
    }
};

