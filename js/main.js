//creamos las constantes globales para los elemnetos principales

const input = document.getElementById('to-do-input')
const addBtn = document.getElementById('addBtn')
const toDoLis = document.getElementById('to-do')
const completedList = document.getElementById('completed')

//creamos la funcion que nos permite crear una nueva tarea a partir del formulario
//toda etiqueta que vamos a crear es a partir de la maqueta html pre existente 
function createToDoItem(){
    //creamos el nodo o elemento padre
    const item = document.createElement('div')
        item.classList.add('item-to-do') 

    const checkbox = document.createElement('input')

    checkbox.type='checkbo'
    // creamos el nodo hijo de input y le agregamos el type=checkbox'



}