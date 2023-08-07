
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
const title = document.querySelector('H1');

const typeHeaders = [header1, header2, header4, header5];
const otherHeaders = [header3, header6];
const cell5 = document.getElementById('cell5');


let input;
let cell;
window.onload = async function () {
    //add event listener to show input when clicked cell
    if(screen.width < 500){
        body.style.scale = 0.7;
    }
    await generateGrid();    
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
    try{
        const pkmn = await getPokemon(str);
        return await getImg(pkmn);
    }
    catch{
        let pkmnNum = pokemon.indexOf(str) + 1;
        const pkmn = await getPokemon(pkmnNum);
        return await getImg(pkmn);
    }
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

async function generateGrid(){
    gridArr = await generateGridArr();

    for(let i = 0; i < typeHeaders.length; i++){
        let img = document.createElement('IMG');
        img.src = getTypeImg(types[gridArr[i].type]);
        typeHeaders[i].innerHTML = '';
        typeHeaders[i].append(img);
    }

    for(let i = 0; i < otherHeaders.length; i++){
        if(gridArr[i + 4].move !== null){
            otherHeaders[i].innerText = `Pokemon that can learn the move ${moves[gridArr[i + 4].move]}`;
        }
        else{
            otherHeaders[i].innerText = `Pokemon that can have the ability ${abilities[gridArr[i + 4].ability]}`;
        }
    }
}

let test;
let usedTypes = [];
async function generateGridArr(){
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

    let otherUsedArr = [];
    //1 refers to moves, 2 refers to abilities
    let head = new header(null, null, Math.floor(Math.random() * (moves.length)));
    arr.push(head);
    otherUsedArr.push(head);

    let head2 = new header(null, Math.floor(Math.random() * abilities.length), null);
    arr.push(head2);
    otherUsedArr.push(head2);
    
    usedTypes = convertUsedTypes(usedArr);
    if(checkTypeValidity(usedTypes)){
        return generateGridArr();
    }
    title.innerText = 'LOADING...';
    test = await checkMAValidity(otherUsedArr, usedTypes);
    while(test){
        arr.splice(4, 1);
        arr.splice(4, 1);
        otherUsedArr = [];
        let head = new header(null, null, Math.floor(Math.random() * (moves.length)));
        arr.push(head);
        otherUsedArr.push(head);

        let head2 = new header(null, Math.floor(Math.random() * abilities.length), null);
        arr.push(head2);
        otherUsedArr.push(head2);
        test = await checkMAValidity(otherUsedArr, usedTypes);
    }
    title.innerText = '';

    return arr;
}

function convertUsedTypes(arr){
    let toString = [];
    for (let type of arr){
        toString.push(types[type]);
    }
    return toString;
}

function checkTypeValidity(arr){
    if((arr.includes('Normal') && arr.includes('Ice')) || (arr.includes('Normal') && arr.includes('Bug')) || (arr.includes('Normal') && arr.includes('Rock')) || (arr.includes('Normal') && arr.includes('Steel')) || (arr.includes('Fire') && arr.includes('Fairy')) || (arr.includes('Ice') && arr.includes('Poison')) || (arr.includes('Ground') && arr.includes('Fairy')) || (arr.includes('Bug') && arr.includes('Dragon')) || (arr.includes('Rock') && arr.includes('Ghost'))){
        return true;
    }
    else{
        return false;
    }
}

//M stands for move, A stands for ability
async function checkMAValidity(arr, usedTypes){
    for(let i = 0; i < arr.length; i++){
        if(arr[i].move !== null){
            let move = await getMove(moves[arr[i].move]);
            console.log(`checking move: ${moves[arr[i].move]}`);
            //make an array holding all the pokemon that can learn that move
            let learnPKMN = [];
            for (let pkmn of move['learned_by_pokemon']){
                learnPKMN.push(pkmn.name);
            }

            //make an array of all the types of the pokemon in the learnPKMN array
            let learnTypes = [];
            for (let pkmn of learnPKMN){
                let curTypes = [];
                let curpkmn = await getPokemon(pkmn);
                for(let type of curpkmn['types']){
                    if(learnTypes.includes(type['type']['name']) === false){
                        curTypes.push(type['type']['name']);
                    }
                }
                learnTypes.push(...curTypes);
            }

            console.log('hi');
            
            if (i === 0){
                for (let j = 2; j <= 3; j++){
                    console.log(`checking ${learnTypes} for ${usedTypes[j]}`);
                    if(learnTypes.includes(usedTypes[j].toLowerCase()) === false){
                        console.log("FALSE!!");
                        return true;
                    }
                }
            }
            else{
                for (let j = 0; j <= 1; j++){
                    console.log(`checking ${learnTypes} for ${usedTypes[j]}`);
                    if(learnTypes.includes(usedTypes[j].toLowerCase()) === false){
                        console.log("FALSE!!");
                        return true;
                    }
                }
            }

        }

        else{
            let ability = await getAbility(abilities[arr[i].ability]);
            //console.log(`checking ability: ${abilities[arr[i].ability]}`);

            //make an array holding all the pokemon that can have that ability
            let havePKMN = [];
            for (let pkmn of ability['pokemon']){
                havePKMN.push(pkmn.pokemon.name);
            }

            //make an array of all the types of the pokemon in the havePKMN array
            let haveTypes = [];
            for (let pkmn of havePKMN){
                let curTypes = [];
                let curpkmn = await getPokemon(pkmn);
                for(let type of curpkmn['types']){
                    if(haveTypes.includes(type['type']['name']) === false){
                        curTypes.push(type['type']['name']);
                    }
                }
                haveTypes.push(...curTypes);
            }


            if (i === 0){
                for (let j = 2; j <= 3; j++){
                    console.log(`checking ${haveTypes} for ${usedTypes[j]}`);
                    if(haveTypes.includes(usedTypes[j].toLowerCase()) === false){
                        console.log("FALSE!!");
                        return true;
                    }
                }
            }
            else{
                for (let j = 0; j <= 1; j++){
                    console.log(`checking ${haveTypes} for ${usedTypes[j]}`);
                    if(haveTypes.includes(usedTypes[j].toLowerCase()) === false){
                        console.log("FALSE!!");
                        return true;
                    }
                }
            }


        }
    }

    return false;
}

//remember for these pokemon to have a try using the name when checking for the correctness
//if it doesnt work use the index + 1 !!!
// async function addForms(){
//     for (let i = 10001; i <= 10271; i++){
//         pokemon.push(getName(await getPokemon(i)));
//     }
// }
