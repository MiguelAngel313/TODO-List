//Elementos que ya existen en el DOM
const ul = document.querySelector('ul');
const addBtn = document.getElementById('add-btn');
const texto = document.querySelector('input');
//Crear el array de tareas en caso de que haya alguna guardada en localStorage
let tareas = recuperarTareas();
cargarTareas();



//Evento para crear tareas con el boton Add
addBtn.addEventListener('click', () => {
    crearTarea();
});

//Envento para crear tareas con el boton Enter
document.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        crearTarea();
    }
});

//Evento para controlar si se marca una tarea del DOM
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

//!!!Modificar el dataset para que al eleminiar una tarea se modifique este tambien y concuerde con la longitud del array

//Evento para controlar si se elimina una tarea
ul.addEventListener('click', (e) => {
    if(e.target.matches('img')){
        let li = e.target.parentElement;
        console.log('Dataset-id de la tarea eliminada:', li.dataset.id);
        tareas.splice(li.dataset.id, 1);
        guardarTareas();
        console.log('Tareas: ', tareas);
        li.remove();

        //***Hay que reasignar el dataset de todos los li
        const lis = document.querySelectorAll('li');
        
        for (const lista of lis){
            console.log('Lista de lis: ', lista.dataset.id);
        }
        //***Hasta aqui es codigo de prueba
    }
});




function crearTarea(){
    //Crear elementos antes de agregarlos al DOM
    const li = document.createElement('li');
    const p = document.createElement('p');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const img = document.createElement('img');
    img.src = 'trash.svg'

    //Agregar un dataset parar el control de eliminaciones de cada tarea
    li.dataset.id = tareas.length;

    //Agregar elementos al DOM si el input no esta vacio.
    if(texto.value){
        p.textContent = texto.value;
        ul.appendChild(li);
        li.appendChild(checkbox);
        li.appendChild(p);
        li.appendChild(img);
        
        
        let nuevaTarea = {
            id: tareas.length,
            parrafo: texto.value,
            estado: false
        };
        
        tareas.push(nuevaTarea);
        guardarTareas();
        texto.value = '';
    }

}

function guardarTareas(){
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

//Funcion para recuperar las tareas y cargarlas en el array tareas
function recuperarTareas(){
    let datosGuardados = localStorage.getItem('tareas');
    return datosGuardados ? JSON.parse(datosGuardados) : [];
}

function cargarTareas(){

    for (const tarea of tareas) {
    //Crerar los elementos para el DOM
    let li = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    let p = document.createElement('p');
    let img = document.createElement('img');
    img.src = 'trash.svg'

    //Agregar un dataset a cada li
    li.dataset.id = tarea.id;

    //Agregar los elementos al DOM para mostrarlos
    p.textContent = tarea.parrafo;
    ul.appendChild(li);
    li.appendChild(checkbox);
    li.appendChild(p);
    li.appendChild(img);
    }
}

