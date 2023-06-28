const divContainer= document.querySelector('toggle-list');
let isClicked= true;

let more= function(){
    if(isClicked){
        divContainer.style.display='block';
        isClicked= false;
    }else{
        divContainer.style.display='none';
        isClicked=true;
    }
}