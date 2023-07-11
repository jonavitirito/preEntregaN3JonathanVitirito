// DOM

const toggleFiltrarPuertas = document.querySelector(".filtroPuertas")
const toggleFiltrar =
    document.querySelector(".filter-product");
const toggleProduct =
    document.querySelector(".toggleProductos");
const toggleAberturas =
    document.querySelector(".toggleAberturas");
const toggleColores =
    document.querySelector(".toggleColores");
// contenido
const contentAberturas =
    document.querySelector(".aberturasContent");
const contentColores =
    document.querySelector(".contentColores");
const compras = document.querySelector("#compras");
const toggleFiltrarAberturas = document.querySelector(".filterAberturas");
const botonCarrito = document.querySelector("#botonCarrito");
const modalContainer = document.querySelector("#modalContainer");
const modal=document.querySelector(".modal");
// eventos
toggleFiltrar.addEventListener("click", () => {
    toggleProduct.toggleAttribute("hidden");
});
toggleAberturas.addEventListener("click", () => {
    contentAberturas.toggleAttribute("hidden");
});
toggleColores.addEventListener("click", () => {
    contentColores.toggleAttribute("hidden");
});





// elaborando el carrito

// productos
class producto {
    constructor(id, tipoDeProducto, precio, color, img, cantidad) {
        this.id = id;
        this.tipoDeProducto = tipoDeProducto;
        this.precio = precio;
        this.color = color;
        this.img = img;
        this.cantidad = cantidad;

    }
}

let arrayCarrito = JSON.parse(localStorage.getItem("carrito"))
if (arrayCarrito === null) {
    arrayCarrito = []
}

const arrayProductos = [];
const puerta1 = new producto(1, "Puerta de rebatir", 105178.00, "Negro mate", "https://http2.mlstatic.com/D_NQ_NP_919280-MLA49568721252_042022-O.webp", 1);
arrayProductos.push(puerta1);
const puerta2 = new producto(2, "Puerta de rebatir", 95564.00, "Blanco brillante", "https://http2.mlstatic.com/D_NQ_NP_910890-MLA54434412001_032023-O.webp", 1);
arrayProductos.push(puerta2);
const puerta3 = new producto(3, "Puerta de rebatir", 125490.00, "Simil madera", "https://http2.mlstatic.com/D_NQ_NP_932929-MLA44161032932_112020-O.webp", 1);
arrayProductos.push(puerta3);
const ventanaCorrediza1 = new producto(4, "Ventana corrediza vidrio simple", 52547.00, "Negro mate", "https://cdn.homedepot.com.mx/productos/147820/147820-a3.jpg", 1);
arrayProductos.push(ventanaCorrediza1);
const ventanaCorrediza2 = new producto(5, "Ventana corrediza vidrio simple", 43941.00, "Blanco brillante", "https://d3ugyf2ht6aenh.cloudfront.net/stores/383/963/products/oks621236-1-ventana-aluminio-klara-100x110-oblak1-91d8fde2bcad34c8c116498597856369-480-0.webp", 1);
arrayProductos.push(ventanaCorrediza2);
const ventanaCorrediza3 = new producto(6, "Ventana corrediza vidrio simple", 72586.00, "Simil madera", "https://media.adeo.com/marketplace/LMES/82456227/1848647.jpeg?width=300", 1);
arrayProductos.push(ventanaCorrediza3);
const ventanaProyectante1 = new producto(7, "Ventana proyectante", 53792, "Negro mate", "https://aberturasabraham.com.ar/aberturas-desplazables/imgs/aberturas/desplazable/abertura.png", 1);
arrayProductos.push(ventanaProyectante1);
const ventanaProyectante2 = new producto(8, "Ventana proyectante", 42683.00, "Blanco brillante", "https://http2.mlstatic.com/D_NQ_NP_861157-MLA50290801284_062022-O.webp", 1);
arrayProductos.push(ventanaProyectante2);
const ventanaProyectante3 = new producto(9, "Ventana proyectante", 86982, "Simil Madera", "https://http2.mlstatic.com/D_NQ_NP_905934-MLA69911575505_062023-O.webp", 1);
arrayProductos.push(ventanaProyectante3);
const ventanaPañoFijo1 = new producto(10, "Ventana paño fijo", 47620.00, "Negro mate", "https://http2.mlstatic.com/D_830751-MLA47694753168_092021-O.jpg", 1);
arrayProductos.push(ventanaPañoFijo1);
const ventanaPañoFijo2 = new producto(11, "Ventana paño fijo", 43272.00, "Blanco brillante", "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRdrYFNqXunMNJWnZ892d2kKDJ0CEmrp_y61QfFjDUOsp1vjP4Z4izGoCv1XOeCMeSFHnEfXpWlmULqznsI5cgPHfFmq2jUnRgKvKgn60y3&usqp=CAE", 1);
arrayProductos.push(ventanaPañoFijo2);
const ventanaPañoFijo3 = new producto(12, "Ventana paño fijo", 58300.00, "Simil madera", "https://teknal.casa/wp-content/uploads/2018/10/simil-madera.jpg", 1);
arrayProductos.push(ventanaPañoFijo3);

arrayProductos.forEach((producto) => {
    const content = document.createElement("div");
    content.className = "content";
    content.innerHTML = `<img src="${producto.img}" alt="">
    <h3 class="tituloProducto">${producto.tipoDeProducto} ${producto.color}</h3>
    <p class="price">$${producto.precio}</p>
    
    `;
compras.append(content);

    let toggleAgregarCarrito = document.createElement("button");
    toggleAgregarCarrito.innerText = "Agregar al Carrito";
    toggleAgregarCarrito.className = "botonAgregarAlCarrito";
content.append(toggleAgregarCarrito);
    toggleAgregarCarrito.addEventListener("click", () => {
        //    const repetidor= arrayCarrito.some((repetidorProducto)=> repetidorProducto.id===producto.id);
        //    if(repetidor){arrayCarrito.forEach((prod)=>{
        //         if(prod.id===producto.id){
        //             prod.cantidad++;
        //         }
        //     })

        // }else{
        arrayCarrito.push(producto);
             agregarProducto();        
        localStorage.setItem("carrito", JSON.stringify(arrayCarrito));
 })    ;     
 })         

const mostrarCarrito = () => {

    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal_header";
    modalHeader.innerHTML = `
    <h1 class="modal_header_titulo">Carrito</h1>
    
    `
    modalContainer.append(modalHeader);
    const modalButton = document.createElement("h1");
    modalButton.className = "modalButton";
    modalButton.innerText = "x";
    modalHeader.append(modalButton);



    arrayCarrito.forEach((producto) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "carrito";
        carritoContent.innerHTML =
            `
            <img src="${producto.img}" alt="">
                <h3 class="tituloProducto">${producto.tipoDeProducto} ${producto.color}</h3>
                <p class="price">$${producto.precio}</p>
                <p>Cantidad: ${producto.cantidad}</p>
                
                
                `;

        modalContainer.append(carritoContent);

        const borrarCarrito = document.createElement("button");
        borrarCarrito.className = "toggleBorrarCarrito";
        borrarCarrito.innerText = "Borrar producto";
        carritoContent.appendChild(borrarCarrito);

        borrarCarrito.addEventListener("click", () => {
            eliminarProducto();
        mostrarCarrito();
        });

    })


    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    const total = arrayCarrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalAComprar = document.createElement("div");
    totalAComprar.className = "totalContent";
    totalAComprar.innerHTML = `Total a pagar:$${total}`;
    modal.append(totalAComprar);






}
botonCarrito.addEventListener("click", mostrarCarrito);





const agregarProducto = () => {
    
    arrayCarrito = arrayCarrito.filter((arrayCarritoId) => {
        return arrayCarritoId
    });
    mostrarCarrito();
}

const eliminarProducto = () => {
    const foundId = arrayCarrito.find((el) => el.id);
    arrayCarrito = arrayCarrito.filter((arrayCarritoId) => {
        return arrayCarritoId !== foundId

    });


}


