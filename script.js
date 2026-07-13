const addBtn = document.getElementById('add-btn');
const ul = document.querySelector('ul');

document.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        crearTarea();
    }
});

ul.addEventListener('change', (e) => {
    if(e.target.matches('input[type="checkbox"]')){
        const checkbox = e.target;
        const li = checkbox.parentElement;
        const textarea = li.querySelector('input[type="text"]')

        checkbox.checked ? textarea.style.textDecoration = 'line-through' : textarea.style.textDecoration = 'none';
    }

});

addBtn.addEventListener('click', () => {
    crearTarea();
});


function crearTarea(){
    const li = document.createElement('li');
    li.innerHTML = '<input type="checkbox"> <input type="text" placeholder="Add a new task">';
    ul.appendChild(li);
}
