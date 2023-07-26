export function filtrarProductosPorNombre(tipoDeProducto) {
    compras.innerHTML = "";
    const productoFiltrado = arrayProductos.filter(producto => producto.tipoDeProducto === tipoDeProducto);
    productoFiltrado.forEach((producto) => {
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

            arrayCarrito.push(producto);
            localStorage.setItem("carrito", JSON.stringify(arrayCarrito));
            agregarProducto();
        }





        )
    }
    )
}
export function filtrarProductosPorColor(color) {
    compras.innerHTML = "";
    const productoFiltrado = arrayProductos.filter(producto => producto.color === color);
    productoFiltrado.forEach((producto) => {
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

            arrayCarrito.push(producto);

            localStorage.setItem("carrito", JSON.stringify(arrayCarrito));
            agregarProducto();
        });
    });
}



import { arrayProductos } from "./index.js";