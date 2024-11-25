let counter = document.getElementById('counter');
let error = document.getElementById('error');
let dec = document.getElementById('dec');
let inc = document.getElementById('inc');
let clear = document.getElementById('clear');

let count = 0;

dec.addEventListener('click', function(){
    count--;
    if(count <= 0){
        count = 0;

        error.style.display = 'block';
        dec.disabled = true;

    }
  
   
    counter.textContent = count;

})

inc.addEventListener('click', function(){
   
    count++;
   
    if(count>0){
        dec.disabled=false;
        error.style.display = 'none'

    }
    counter.textContent = count;

})
clear.addEventListener("click", function(){
    count=0;
    counter.textContent = count;
    dec.disabled = true;
    error.style.display = 'block';

} )