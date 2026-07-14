const ul = document.querySelector('ul');
const addBtn = document.getElementById('add-btn');
const texto = document.querySelector('input');
let tareas = [];

addBtn.addEventListener('click', () => {
    crearTarea();    
})


function crearTarea(){
    const li = document.createElement('li');
    const p = document.createElement('p');
    const checkbox = document.createElement('input');
    const img = document.createElement('img');
    img.src = 'trash.svg'
    checkbox.type = 'checkbox';

    if(texto.value){
        p.textContent = texto.value;
        ul.appendChild(li);
        li.appendChild(checkbox);
        li.appendChild(p);
        li.appendChild(img);
        tareas.push(texto.value);
        texto.value = '';
    }
}
