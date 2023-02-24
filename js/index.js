import { Router } from './router.js';

const searchButton = document.querySelector('.searchButton');
const cityField = document.querySelector('#cityField');
const router = new Router();

searchButton.addEventListener('click', searchBlock);

function searchBlock(){
    const city = cityField.value;
    console.log(`bloco selecionado .. ${city}`);

    if(city == '0'){
        router.add('0', '../pages/main.html');
        console.log('entrou no if 0');
    }else if(city == '1'){
        router.add('1', '../pages/blockAtalaia.html');
        console.log('entrou no if 1');   
    }else if(city == '2'){
        router.add('2', '../pages/blockMaceio.html');
        console.log('entrou no if 3');
        
    }else if(city == '3'){
        router.add('3', '../pages/blockMarechal.html');
        console.log('entrou no if 4');
        
    }else if(city == '4'){
        router.add('4', '../pages/blockPenedo.html');
        console.log('entrou no if 5');   
    }
}

window.onload = () =>{
    router.add('0', '../pages/main.html');   
}