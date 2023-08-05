// TEST VARIABLES
let eevee;
let fire;
let ten;

// HTML Elements
const grid = document.getElementById("grid-div");
const inputDiv = document.getElementById("input-div");
const sugList = document.querySelector('UL');
const body = document.querySelector('BODY');

window.onload = async function () {
    // eevee = await getPokemon("eevee");
    // fire = await getType('fire');
    // ten = await getAbility(10);

    let input;
    let cell;
    //add event listener to show input when clicked cell
    grid.addEventListener('click', function(e){
        if(inputDiv.childNodes.length > 3){
            return;
        }
        if(e.target.classList.contains('cell')){
            cell = e.target;
            console.log(cell);
            grid.style.filter = 'blur(1px)';
            input = document.createElement('input');
            input.type = 'text';
            input.setAttribute('autofocus', 'true');
            input.addEventListener('keyup', searchHandler);
            inputDiv.prepend(input);
        }

         sugList.addEventListener('click', function(e) {
            // TODO
            input.value = e.target.innerText;
            cell.innerText = input.value;
            input.remove();
            grid.style.filter = 'none';
            showSuggestions([]);
            
        });
    });

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



