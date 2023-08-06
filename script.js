
// HTML Elements
const grid = document.getElementById("grid-div");
const inputDiv = document.getElementById("input-div");
const sugList = document.querySelector('UL');
const body = document.querySelector('BODY');
const ulDiv = document.getElementById('ul-div');
const header1 = document.getElementById('header1');
const header2 = document.getElementById('header2');
const header3 = document.getElementById('header3');
const header4 = document.getElementById('header4');
const header5 = document.getElementById('header5');
const header6 = document.getElementById('header6');
const typeHeaders = [header1, header2, header4, header5];
const otherHeaders = [header3, header6];



let input;
let cell;
window.onload = async function () {
    //add event listener to show input when clicked cell
    generateGrid();
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

class header{
    constructor(type, ability, move){
        this.type = type;
        this.ability = ability;
        this.move = move;
    }
}

function generateGrid(){
    gridArr = generateGridArr();

    for(let i = 0; i < typeHeaders.length; i++){
        let img = document.createElement('IMG');
        img.src = getTypeImg(types[gridArr[i].type]);
        typeHeaders[i].innerHTML = '';
        typeHeaders[i].append(img);
    }

    for(let i = 0; i < otherHeaders.length; i++){
        otherHeaders[i].innerText = `Pokemon that can learn the move ${moves[gridArr[i + 4].move]}`;
    }
}

function generateGridArr(){
    let arr = [];
    let usedArr = [];
    for (let i = 0; i < 4; i++){
        let random = Math.floor(Math.random() * (types.length));
        if(usedArr.includes(random)){
            i--;
        }
        else{
            arr.push(new header(random, null, null));
            usedArr.push(random);
        }

    }

    //1 refers to abilities, 2 refers to moves
    for (let i = 0; i < 2; i++){
        arr.push(new header(null, null, Math.floor(Math.random() * (moves.length))));
    }
    return arr;
}
