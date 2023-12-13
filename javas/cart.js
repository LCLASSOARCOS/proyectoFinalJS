const productoEnCarrito = JSON.parse(localStorage.getItem('carrito-productos')) || [];

const contenedorCarritoVacio = document.querySelector('#carrito-vacio');
const contenedorProducto = document.querySelector('#contenedor-cajas');
const contenedorTotal = document.querySelector('#caja-total');
const contenedorCarritoComprado = document.querySelector('#carrito-comprado');
const numeritoCarrito = document.querySelector('#numerito');
let botonesEliminar = document.querySelectorAll('.boton-eliminar');
const botonVaciar = document.querySelector('.boton-vaciar-izquierda')
const total = document.querySelector('#total')
const botonComprar = document.querySelector('.boton-comprar-derecha')


var numeroTotalCarrito = 0;



// for (let index = 0; index < productoEnCarrito.length; index++) {
//     numeroTotalCarrito += productoEnCarrito[index].cantidad;
// }

// numeritoCarrito.innerHTML = numeroTotalCarrito;

function actualizarNumeroCarrito() {
    numeritoCarrito.innerHTML = productoEnCarrito.reduce((total, producto) => total + producto.cantidad, 0);
}

function cargarProductosCarrito() {
    if (productoEnCarrito.length > 0) {
        contenedorCarritoVacio.classList.add('ocultar');
        contenedorProducto.classList.remove('ocultar');
        contenedorTotal.classList.remove('ocultar');
        contenedorCarritoComprado.classList.add('ocultar');

        contenedorProducto.innerHTML = '';

        productoEnCarrito.forEach(producto => {
            const div = document.createElement('div');
            div.classList.add('caja-producto-comprado');
            div.innerHTML =
                `<div class="div-imagen">
                    <img class="imagen-carrito" src='${producto.imagen}' alt="${producto.nombre}">
                </div>
                <div class="div-datos-nombre">
                    <p class="parrafo-div">titulo</p>
                    <h3 class="titulo-divv">${producto.nombre}</h3>
                </div>
                <div class="div-datos">
                    <p class="parrafo-div">Cantidad</p>
                    <h3 class="titulo-div">${producto.cantidad}</h3>
                </div>
                <div class="div-datos">
                    <p class="parrafo-div">Precio</p>
                    <h3 class="titulo-div">$${producto.precio}</h3>
                </div>
                <div class="div-datos">
                    <p class="parrafo-div">Subtotal</p>
                    <h3 class="titulo-div">$${producto.precio * producto.cantidad}</h3>
                </div>
                <button class="boton-eliminar" data-id='${producto.id}'>
                    <i class="fa-solid fa-trash"></i>
                </button>`;
            contenedorProducto.append(div);
        });

        // Actualizar los botones de eliminar después de cargar los productos
        actualizarBotonesEliminar();
    } else {
        contenedorCarritoVacio.classList.remove('ocultar');
        contenedorProducto.classList.add('ocultar');
        contenedorTotal.classList.add('ocultar');
        contenedorCarritoComprado.classList.add('ocultar');
    }
    actualizarNumeroCarrito();
    actualizarTotal();
}

function actualizarBotonesEliminar() {
    // Seleccionar todos los botones de eliminar después de cargar los productos
    botonesEliminar = document.querySelectorAll('.boton-eliminar');

    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e) {
    Toastify({
        text: "Producto eliminado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, steelblue, #32528e)",
          borderRadius: '2rem',
          textTransform: 'uppercase',
          fontSize: '.75rem'
        },
        offset: {
            x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '2.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        onClick: function(){} // Callback after click
      }).showToast();

    // Seleccionar el id
    const idBoton = e.currentTarget.dataset.id;
    // Proceso para convertir el string en número
    const idProducto = parseInt(idBoton, 10);
    // Encontrar el índice del objeto
    const index = productoEnCarrito.findIndex(producto => producto.id === idProducto);
    
    if (index !== -1) {
        // Eliminar el producto del carrito
        productoEnCarrito.splice(index, 1);
        // Actualizar el carrito en localStorage
        localStorage.setItem('carrito-productos', JSON.stringify(productoEnCarrito));
        // Recargar los productos en el carrito
        cargarProductosCarrito();
    }
}

cargarProductosCarrito();

botonVaciar.addEventListener('click', vaciarCarrito)

function vaciarCarrito(){
    productoEnCarrito.length = 0
    localStorage.setItem('carrito-productos', JSON.stringify(productoEnCarrito));
    cargarProductosCarrito()
}

function actualizarTotal(){
    const totalCalculado =productoEnCarrito.reduce((acc, producto) => acc +(producto.precio* producto.cantidad), 0)
    total.innerText = `$${totalCalculado}`
}

botonComprar.addEventListener('click', comprarCarrito)
function comprarCarrito(){
    productoEnCarrito.length= 0
    localStorage.setItem('carrito-productos', JSON.stringify(productoEnCarrito));
    

    contenedorCarritoVacio.classList.add('ocultar');
    contenedorProducto.classList.add('ocultar');
    contenedorTotal.classList.add('ocultar');
    contenedorCarritoComprado.classList.remove('ocultar');
}