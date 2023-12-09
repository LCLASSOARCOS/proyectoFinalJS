// libreria

function mostrarAlerta() {
    Swal.fire({
      title: '¡Producto agregado!',
      text: 'Has agregado un producto al carrito',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }


const Carrito = [];

const contenedor = document.querySelector('.gridPadre');
const numerito = document.querySelector('#numerito')

function cargarProductos() {

    productos.forEach(producto => {
        const div = document.createElement('div')
        div.classList.add('productoCasillas')
        div.innerHTML = 
        `
        <div class="productoCasillas">
        <img class="productoImagen" src="${producto.imagen}" alt="${producto.nombre}">
        <p class="productoParrafo">${producto.nombre}</p>
        <h2 class="productoPrecio">$${producto.precio}</h2>
        <button class="productoComprar" id='${producto.id}'>Agregar</button>
        </div>`;

        contenedor.append(div)
    })
}

cargarProductos();

let botonesAgregar = document.querySelectorAll('.productoComprar')
botonesAgregar.forEach(boton => {
    boton.addEventListener('click', agregarAlCarro)
})

// function actualizarBotonesAgregar(){
//     botonesAgregar = document.querySelectorAll('productoComprar')
//     botonesAgregar.forEach(boton => {
//         boton.addEventListener('click', agregarAlCarrito)
//     })
// }

function agregarAlCarro(e){
    const idBoton = e.currentTarget.id
    const idProducto = parseInt(idBoton, 10);
    const productoCargado = productos.find(producto => producto.id === idProducto)
       // Verificar si el producto ya está en el carrito
       const productoEnCarrito = Carrito.find(item => item.id === productoCargado.id);

       if (productoEnCarrito) {
           // Si el producto ya está en el carrito, incrementar la cantidad
           productoEnCarrito.cantidad++;
       } else {
           // Si el producto no está en el carrito, agregarlo con cantidad 1
           productoCargado.cantidad = 1;
           Carrito.push(productoCargado);
       }
   
       contarNumerito()

       localStorage.setItem
}

function contarNumerito(){
    let sumaNumerito = Carrito.reduce((acc,producto) => acc + producto.cantidad, 0)
    numerito.innerText= sumaNumerito
    mostrarAlerta()
}