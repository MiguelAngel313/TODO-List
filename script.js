const ul = document.querySelector('ul');
const addBtn = document.getElementById('add-btn');
const texto = document.querySelector('input');
let tareas = [];



addBtn.addEventListener('click', () => {
    crearTarea();    
})

ul.addEventListener('change', (e) => {
    if(e.target.matches('input[type="checkbox"]')){
        const p = e.target.parentElement.querySelector('p');

        if(e.target.checked){   
            p.style.textDecoration = 'line-through';
            console.log('Elemento tachado: ', p.textContent);
        }
        else{
            p.style.textDecoration = 'none';
        }
    }
});


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
        texto.value = '';
        
        
        let nuevaTarea = {
            id: tareas.length,
            texto: texto.value,
            estado: false
        };
        
        tareas.push(nuevaTarea);
        guardarTareas();
    }

}

function guardarTareas(){
    localStorage.setItem('tareas', JSON.stringify(tareas));
}