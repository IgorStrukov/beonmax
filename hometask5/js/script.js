/*111111111111111111111111111111111111111*/
let menu = document.querySelector('.menu');


   let li5 = menu.appendChild( document.createElement('li'));
   li5.classList.add('menu-item');
   li5.textContent = 'Пятый пункт';

let li = document.querySelectorAll('.menu-item');

   for(let i = 0; i < li.length; i++){
       if(li[i] == li[1]){
           li[i].textContent = 'Второй пункт';
       }else if(li[i] == li[2]){
           li[i].textContent = 'Третий пункт';
       }
       
   }
/*222222222222222222222222222222222222222222222222222*/

let img = document.body.style.backgroundImage = "url(./img/apple_true.jpg)";

/*33333333333333333333333333333333333333333333333333333333333333333333*/

let  title = document.querySelector('.title');
title.textContent = "Мы продаем только подлинную технику Apple";

/*4444444444444444444444444444444444444444444444444444444444444444*/

let  column = document.querySelectorAll('.column');


for(let i = 0; i < column.length; i++){
    if(column[i] == column[1]){
        column[i].classList.add('myColumn');
    }
    
}
let  myColumn = document.querySelector('.myColumn');
let  adv = document.querySelector('.adv');
let a = myColumn.removeChild(adv);

let answer = window.prompt('Как вы относитесь к технике Apple?','');
let prompt = document.querySelector('#prompt');
prompt.textContent = answer;
