// Formulario
const form = document.querySelector('form')
// Input del formulario
const inp = document.querySelector('form input')
// El contenedor de los items
const contItems = document.querySelector('.items')
// Constante que guarda el botón para eliminar los items
const eliminarTodo = document.querySelector('.eliminar-todo')
// Logo de GitHub
const github = document.querySelector('i.bi-github')
// Una variable que guarda el valor del input al enviar el formulario
let inpValue

// Si se toca el logo de GitHub que se abra el repositorio en una ventana nueva
github.addEventListener('click', () => window.open('https://github.com/fedeperin/todo-javascript'))

// Si se toca el botón para eliminar todo...
eliminarTodo.addEventListener('click', () => {
    contItems.style.paddingLeft = '100vw'
    setTimeout(() => {
        contItems.textContent = ''
        contItems.style.paddingLeft = '10px'
    }, 500)
})

// Cuando se envía el formulario...
form.addEventListener('submit', e => {
    // Prevengo que por defecto se recargue la página y se procese el formulario
    e.preventDefault()

    // Cambio el contenido de la variable inpValue al valor de la variable y le agrego el .trim() para que elimine los espacios al principo y al final del input, y si el input está relleno con puros espacios, que no parezca nada
    inpValue = inp.value.trim()

    // Si el input está vacío o está relleno con solo espacios, que no se ejecúte el resto
    if(inpValue == '') return

    // Ejecuto la función para agregar un item, pasandole el parámetro inpValue (que es el valor del input)
    agregarItem(inpValue)

    // Cuando se envió el formulario, que el valor del input vuelva a ''
    inp.value = ''

    // Cuando se envió el formulario, que el elemento seleccionado sea el input
    inp.select()
})

// Función para agregar un nuevo item
function agregarItem(contenido) {
    // Que se cree un nuevo item
    const item = document.createElement('div')
    // La parte del texto del item
    const texto = document.createElement('p')
    // La parte de los íconos del item
    const iconos = document.createElement('div')
    // El ícono para eleminar el item
    const cerrarIcon = document.createElement('i')
    // El ícono para tachar el ítem
    const tacharIcon = document.createElement('p')


    // Agregarle las clases de Bootstrap Icons
    cerrarIcon.classList.add('bi')
    cerrarIcon.classList.add('bi-x')

    // Agregarle al item la clase item
    item.classList.add('item')

    // Agregarle a la sección de los íconos la clase iconos
    iconos.classList.add('iconos')
    
    // A la seccion del texto, que se le agregue el contenido del parámetro que se le pasó a la funcion
    texto.textContent = contenido
    // Que al ícono para tachar que se le agregue el '-'
    tacharIcon.textContent = '-'

    // Que se le agregue a la sección de los íconos los íconos
    iconos.appendChild(tacharIcon)
    iconos.appendChild(cerrarIcon)

    // Que se le agregue al item la sección del texto y la de los íconos
    item.appendChild(texto)
    item.appendChild(iconos)

    // Que se le agregue al contenedor de los items, el nuevo item
    contItems.appendChild(item)

    // Si se presiona el ícono para eliminar el ítem...
    cerrarIcon.addEventListener('click', () => {
        // Que al eliminarse el item, que su opacidad baje a cero con una transición
        item.style.opacity = '0'

        // Que después del intervalo en el que llega al final del recorrido que se elimine (intervalo aclarado en la propiedad transition del item en el CSS)
        setTimeout(() => {
            item.style.display = 'none'
        }, 500)
    })

    // Sí se toca el ícono para tachar...
    tacharIcon.addEventListener('click', () => {
        // Que si tiene la clase tachado, que se la saque, si no la tiene que se la ponga
        texto.classList.toggle('tachado')

        // Sí el contenido de el ícono es un - que se lo cambie a un + y viceversa
        // También si el elemento está tachado, que su opacidad sea 0.5, si no que sea 1
        if(tacharIcon.textContent == '-') {
            tacharIcon.textContent = '+'
            item.style.opacity = '0.5'
        } else if(tacharIcon.textContent == '+') {
            tacharIcon.textContent = '-'
            item.style.opacity = '1'
        }
    })
}






// FIN 🤯