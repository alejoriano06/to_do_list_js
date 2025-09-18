// ==========================
// Capturamos elementos
// ==========================
const input = document.querySelector('.formulario input');
const addBtn = document.querySelector('.añadir');
const toDoList = document.querySelector('#cont-to-do-list');
const completedList = document.querySelector('#cont-completed-list');
const btnStyles = document.getElementById('change-styles');


// ==========================
// Función para crear item
// ==========================
function createToDoItem(textoItem) {
    // Contenedor del item
    const item = document.createElement('div');
    item.classList.add('item-to-do');

    // Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Texto
    const p = document.createElement('p');
    p.textContent = textoItem;

    // Botón eliminar
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('equis');
    deleteBtn.textContent = "✖";

    // Ensamblar
    item.appendChild(checkbox);
    item.appendChild(p);
    item.appendChild(deleteBtn);

    // Eventos del item
    eventsToItem(item);

    return item;
}


// ==========================
// Función que agrega item
// ==========================
function addItem() {
    const textoItem = input.value.trim();
    if (textoItem === "") {
        alert("No se puede crear una tarea vacía");
        return;
    }

    const newItem = createToDoItem(textoItem);
    toDoList.appendChild(newItem);
    input.value = "";
}


// ==========================
// Función para eventos de cada item
// ==========================
function eventsToItem(item) {
    const checkbox = item.querySelector('input');
    const deleteBtn = item.querySelector('button');

    // Completar tarea
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            completedList.appendChild(item);
        } else {
            toDoList.appendChild(item);
        }
    });

    // Eliminar tarea
    deleteBtn.addEventListener('click', () => {
        item.remove();
    });
}


// ==========================
// Eventos principales
// ==========================
// Click en el botón +
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addItem();
});

// Enter en el input
input.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        addItem();
    }
});


// ==========================
// Modo noche / día
// ==========================
btnStyles.addEventListener('click', () => {
    const linkCss = document.getElementById('enlace-estilos');

    if (linkCss.getAttribute('href') === 'css/styles-noche.css') {
        linkCss.setAttribute('href', 'css/style.css');
        btnStyles.textContent = 'Modo Noche';
    } else {
        linkCss.setAttribute('href', 'css/styles-noche.css');
        btnStyles.textContent = 'Modo Día';
    }
});
