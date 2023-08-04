let eevee;
let fire;
let ten;

window.onload = async function () {
    eevee = await getPokemon("eevee");
    fire = await getType('fire');
    ten = await getAbility(10);


};

