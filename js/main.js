//creamos las constantes globales para los elemnetos principales

const input = document.getElementById('to-do-input')
const addBtn = document.getElementById('add-btn')
const toDoList = document.getElementById('cont-to-do-list')
const completedList = document.getElementById('completed')

//creamos la funcion que nos permite crear una nueva tarea a partir del formulario
//toda etiqueta que vamos a crear es a partir de la maqueta html pre existente 
function createToDoItem(textoItem){
    //creamos el nodo o elemento padre o contenedor
    const item = document.createElement('div')
        item.classList.add('item-to-do') 

    const checkbox = document.createElement('input');

    checkbox.type='checkbox';
    // creamos el nodo hijo de input y le agregamos el type=checkbox' es decir lo que escribe en el campo el usuario

    //creamos el siguinete nodo hijo parrafo a este parrafo le asignoi el valor  del argumento de la funcion

    const p = document.createElement('p');
    p.textContent=textoItem;

    //creamos el ultimo nodo hijo para el boton de eliminar 

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent='x';

    //ensamblamos dentro del nodo padre sus nodos hijos, es decir la estructura de la tarea
    item.appendChild(checkbox);
    item.appendChild(p);
    item.appendChild(deleteBtn);

    //utilizamos el return para dar respuesta del elmento creado ya que lo utilizaremos mas adelante 

    return item

}

// detectamos el evento click sobre el boton agregar + con un evento de escucha o lisetener 
// para que a partir de este evento se agregue la tarea dentro del contenedor cont-to-do-list

addBtn.addEventListener('click', ()=>{
    const textoItem = input.value.trim(); 
    if(textoItem==""){

        alert("No se puede creara una tarea vacia");
    }
    else{
        const newItem = createToDoItem(textoItem);
        toDoList.appendChild(newItem);
        input.value="";
    }
});