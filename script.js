// Typing Animation
const typedName = document.getElementById('typed-name');

const name="Hemanth Pattela";

let index=0;

function typeLetter(){
    if(index < name.length){
        typedName.textContent +=name[index];

        index++;

        setTimeout(typeLetter,100);
    }
}

typeLetter();

//Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click',function(){
    
    document.body.classList.toggle('dark');
   

    if (document.body.classList.contains('dark')) {
        themeToggle.textContent = 'Light Mode';
        
    } else {
        themeToggle.textContent = 'Dark Mode';
        
    }
});