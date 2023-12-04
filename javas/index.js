const productos = [
    { id: 1, nombre: 'Vestido largo manga larga tul print', imagen: '../img/camiseta1.jpg', precio: 70000, categoria: 'Portátiles' },
    { id: 2, nombre: 'Camiseta polo', imagen: '../img/hombre.jpg', precio: 800, categoria: 'Portátiles' },
    { id: 3, nombre: 'Smartwatch', imagen: '../img/camiseta1.jpg', precio: 200, categoria: 'Portátiles' },
    { id: 4, nombre: 'Micrófono BT', imagen: '../img/camiseta1.jpg', precio: 50, categoria: 'Audio' },
    { id: 5, nombre: 'Bafles WiFi', imagen: '../img/camiseta1.jpg', precio: 80, categoria: 'Audio' },
    { id: 6, nombre: 'Auriculares BT', imagen: '../img/camiseta1.jpg', precio: 60, categoria: 'Audio' },
    { id: 7, nombre: 'Smart TV', imagen: '../img/camiseta1.jpg', precio: 600, categoria: 'Televisores' },
    { id: 8, nombre: 'Smart-Cam', imagen: '../img/camiseta1.jpg', precio: 400, categoria: 'Video' },
    { id: 9, nombre: 'All In One', imagen: '../img/camiseta1.jpg', precio: 900, categoria: 'Desktop' },
    { id: 10, nombre: 'Play Estéishon', imagen: '../img/camiseta1.jpg', precio: 300, categoria: 'Videojuegos' },
    { id: 11, nombre: 'Notebook gamer', imagen: '../img/camiseta1.jpg', precio: 1000, categoria: 'Portátiles' },
    { id: 12, nombre: 'iPhone 14', imagen: '../img/camiseta1.jpg', precio: 800, categoria: 'Portátiles' },
    { id: 13, nombre: 'Apple watch', imagen: '../img/camiseta1.jpg', precio: 200, categoria: 'Portátiles' },
    { id: 14, nombre: 'Micrófono', imagen: '../img/camiseta1.jpg', precio: 50, categoria: 'Audio' },
    { id: 15, nombre: 'Bafles potenciados', imagen: '../img/camiseta1.jpg', precio: 80, categoria: 'Audio' },
    { id: 16, nombre: 'Auriculares', imagen: '../img/camiseta1.jpg', precio: 60, categoria: 'Audio' },
    { id: 17, nombre: 'Google TV', imagen: '../img/camiseta1.jpg', precio: 600, categoria: 'Televisores' },
    { id: 18, nombre: 'Cámara fotográfica', imagen: '../img/camiseta1.jpg', precio: 400, categoria: 'Video' },
    { id: 19, nombre: 'Monitor 32', imagen: '../img/camiseta1.jpg', precio: 900, categoria: 'Desktop' },
    
]


const contenedor = document.querySelector('.gridPadre');

function crearCardHTML(producto) {
    return `
        <div class="productoCasillas">
            <img class="productoImagen" src="${producto.imagen}" alt="${producto.nombre}">
            <p class="productoParrafo">${producto.nombre}</p>
            <h2 class="productoPrecio">$${producto.precio}</h2>
            <button class="productoComprar" onclick='agregarAlCarrito(${producto.id})'>Comprar</button>
        </div>`;
}

function cargarProductos() {
    if (productos.length > 0) {
        contenedor.innerHTML = productos.map(crearCardHTML).join('');
    }
}

document.addEventListener('DOMContentLoaded', cargarProductos);

function agregarAlCarrito(productoId) {
    // Implementa la lógica para agregar al carrito según el productoId
    console.log(`Añadido al carrito: ${productoId}`);
}
