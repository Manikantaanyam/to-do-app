const inputFiled = document.getElementById('text');
const liContainer = document.querySelector('#li-container');
const addButton = document.querySelector('.add');

addButton.addEventListener('click', ()=>{
    if(inputFiled.value === ""){
        alert('you have to enter the Text');
    }
    else{
       let content = document.createElement('li');
       content.innerText = inputFiled.value;
       liContainer.appendChild(content);

       let span = document.createElement('span');
       span.innerText = "\u00d7"
       content.appendChild(span);

    }

    inputFiled.value="";
    saveData();

});

liContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }

    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data", liContainer.innerHTML);
}

function getData(){
    liContainer.innerHTML = localStorage.getItem("data");
}

// to remove the item from localstorage
// localStorage.removeItem

getData();