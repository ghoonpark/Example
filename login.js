const id = document.getElementById('id')
const password = document.getElementById('password')
const mylogin = document.getElementById('login2')
let errStack = 0;

function clickEvent(){
    alert('Click');
}; 

if (addEventListener){
    mylogin.addEventListener('click', function(){
        alert('cc');
    });
}

mylogin.addEventListener('click', () => {
    alert('Click');
});