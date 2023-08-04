let eevee;

window.onload = async function () {
    eevee = await getPokemon("eevee");
    if(getTypes(eevee).includes('normal')){
        console.log("LESSS GOOOO");
    }
    
};

