//creamos las constantes globales para los elemnetos principales

const input = document.getElementById('to-do-input')
const addBtn = document.getElementById('add-btn')
const toDoList = document.getElementById('cont-to-do-list')
const completedList = document.getElementById('cont-completed-list')

//creamos la funcion que nos permite crear una nueva tarea a partir del formulario
//toda etiqueta que vamos a crear es a partir de la maqueta html pre existente 

// esta funcion solo crea la estructura html y la deja en un limbo, aun no se inserta en la pagina
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
        eventsToItem(newItem)
        input.value="";
    }
}
);

//la siguiente funcion nos permitira agregar el funcionamiento sobre las tareas marcar la tarea como completada o en dado caso eliminarla

function eventsToItem(item){
    // utilizamos querySelector para capturar el input y el button que estan dentro del item
    const checkbox = item.querySelector('input');
    const deleteBtn = item.querySelector('button');

    //completar la tarea
    checkbox.addEventListener('change',()=>{

        if(checkbox.checked){
            completedList.appendChild(item);
        }

        else{

            toDoList.appendChild(item);
        }
    });

    deleteBtn.addEventListener('click', ()=>{

        item.remove();

    });

}

const btnStyles = document.getElementById('change-styles');

btnStyles.addEventListener('click', ()=>{

    const linkCss = document.getElementById('enlace-estilos');



    if(linkCss.getAttribute('href')==='css/styles-noche.css'){

        linkCss.setAttribute('href', 'css/style.css');
        btnStyles.textContent='modo-dia';

    }
    else{
        linkCss.setAttribute('href', 'css/styles-noche.css');
        btnStyles.textContent='modo-dia';
    }







    
})
