import { productoServices } from "../servicios/principalServicios.js";

const nuevoProducto = (name, price, imageUrl) => {
    const card = document.createElement("li");
    const contenido = `
    <li>
    <image src="${imageUrl}" alt="" class="principal__img">
    <h3 class="principal__nombre">${name}</h3>
    <p class="principal__precio">${price}</p>
    </li>
    `
    card.innerHTML = contenido;
    card.classList.add("card");
    return card;
}

const producto = document.querySelector("[data-principal]");

const render = async () => {
    try{
        const listaProductos = await productoServices.listaProductos();
        listaProductos.forEach(elemento => {
            producto.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl));
        });
    }
    catch(error) {
        console.log(error);
    }
}

render();