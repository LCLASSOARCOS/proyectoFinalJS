const productoEnCarrito = JSON.parse(localStorage.getItem('carrito-productos'))

const contenedorCarritoVacio = document.querySelector('#carrito-vacio')
const contenedorProducto = document.querySelector('#section-resumen')
const contenedorTotal = document.querySelector('#caja-total')
const contenedorCarritoComprado = document.querySelector('#carrito-comprado')

if (productoEnCarrito) {
    contenedorCarritoVacio.classList.add('ocultar')
    contenedorProducto.classList.remove('ocultar')
    contenedorTotal.classList.remove('ocultar')
    contenedorCarritoComprado.classList.add('ocultar')

    // let div;

    productoEnCarrito.forEach(producto => {

        const div = contenedorProducto
        div.classList.add('#section-resumen')
        div.innerHTML =
            `<div class="div-imagen">
                    <img class="imagen-carrito" src="${producto.imagen}" alt="${producto.nombre}">
                </div>
                <div class="div-datos">
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
                    <h3 class="titulo-div">$${producto.precio* producto.cantidad}</h3>
                </div>
                <button class="boton-eliminar" id='${producto.id}'>
                    <i class="fa-solid fa-trash"></i>
                </button>`
                contenedorProducto.append(div)
    });
} else {
    
}