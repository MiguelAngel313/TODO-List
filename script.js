const addBtn = document.getElementById('add-btn');
const ul = document.querySelector('ul');

addBtn.addEventListener('click', () => {
    crearTarea();
});


function crearTarea(){
    const li = document.createElement('li');
    li.innerHTML = '<input type="checkbox"> <input type="text" placeholder="Add a new task">';
       ul.appendChild(li);
}

