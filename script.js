const addBtn = document.getElementById('add-btn');
const ul = document.querySelector('ul');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');



for(const checkbox of checkboxes) {
    checkbox.addEventListener('change', () => {
        const li = checkbox.parentElement;
        const textarea = li.querySelector('input[type="text"]');
        if(checkbox.checked){
            textarea.style.textDecoration = 'line-through';
        }
        else{
           textarea.style.textDecoration = 'none'; 
        }
    });
}

addBtn.addEventListener('click', () => {
    crearTarea();
});


function crearTarea(){
    const li = document.createElement('li');
    li.innerHTML = '<input type="checkbox"> <input type="text" placeholder="Add a new task">';
    ul.appendChild(li);
}
