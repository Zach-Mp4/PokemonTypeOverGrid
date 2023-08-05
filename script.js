// TEST VARIABLES
let eevee;
let fire;
let ten;

// HTML Elements
const grid = document.getElementById("grid-div");
const inputDiv = document.getElementById("input-div");
const sugList = document.querySelector('UL');
const body = document.querySelector('BODY');
const ulDiv = document.getElementById('ul-div');
let input;
let cell;
window.onload = async function () {
    //add event listener to show input when clicked cell
    grid.addEventListener('click', clickHandler);

    

};

let val = '';
function searchHandler(e){
    val = e.target.value;
    let res = search(val);
    showSuggestions(res, val);
}

function search(str){
    let results = [];
    const newStr = str.toLowerCase();

    for (let PKMN of pokemon){
        if(PKMN.toLowerCase().includes(newStr)){
            results.push(PKMN);
        }
    }

    if (str === ''){
        results = [];
    }

    return results;
}

function showSuggestions(results){
    sugList.innerHTML = '';
    for (let result of results){
        const li = document.createElement("LI");
		li.innerText = result;
		sugList.appendChild(li);
    }
}


async function setImg(str){
    pkmnNum = pokemon.indexOf(str) + 1;
    const pkmn = await getPokemon(pkmnNum);
    return await getImg(pkmn);
}

function clickHandler(e){
    if(inputDiv.childNodes.length > 3){
        return;
    }
    if(e.target.classList.contains('cell')){
        cell = e.target;
        console.log(cell);
        grid.style.filter = 'blur(1px)';
        ulDiv.style.height = '300px';
        input = document.createElement('input');
        input.type = 'text';
        input.setAttribute('autofocus', 'true');
        input.addEventListener('keyup', searchHandler);
        input.placeholder = "Enter A Pokemon"
        inputDiv.prepend(input);
        input.focus();
    }

     sugList.addEventListener('click', async function(e) {
        input.value = 'loading...';
        let val = e.target.innerText;
        cell.style.backgroundImage = `url(${await setImg(val)})`;
        input.remove();
        ulDiv.style.height = '0px'
        grid.style.filter = 'none';
        showSuggestions([]);
        
    });
}

