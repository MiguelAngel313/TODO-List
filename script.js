const ul = document.querySelector('ul');
const addBtn = document.getElementById('add-btn');
const texto = document.querySelector('input');
const img = document.createElement('img');
img.src = 'trash.svg'
let tareas = recuperarTareas();
cargarTareas();

        //Prueba de tareas
        console.log('Prueba de tareas: ', tareas);

//TODO: Eliminar esta parte cuando termine el programa
//localStorage.clear();


//Evento para crear tareas con el boton Add
addBtn.addEventListener('click', () => {
    crearTarea();
})

//Evento para controlar si se agrega una tarea al DOM
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
    checkbox.type = 'checkbox';

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

//Funcion sin uso por el momento
function recuperarTareas(){
    let datosGuardados = localStorage.getItem('tareas');
    return datosGuardados ? JSON.parse(datosGuardados) : [];
}

function cargarTareas(){
    //Continuar agregando todos los atributos al dom al cargar la pagina para mostrarlos.
    for (const tarea of tareas) {

    let li = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    let p = document.createElement('p');
    let img = document.createElement('img');
    img.src = 'trash.svg'

        console.log('Tareas value: ', tarea.parrafo);
        p.textContent = tarea.parrafo;
        ul.appendChild(li);
        li.appendChild(checkbox);
        li.appendChild(p);
        li.appendChild(img);
    }
}
