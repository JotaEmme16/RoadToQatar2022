class Item {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

let carrito = [];
let stock = [];

const tabla = document.getElementById("items");
const agregar = document.querySelector("#agregar");
const aumentar = document.querySelector("#aumentar");
const ordenar = document.getElementById("ordenar");
const vaciar = document.getElementById("vaciar");
const productosEnStock = document.getElementById("servicios");

stock.push(new Producto("Hotel Hilton", 5000));
stock.push(new Producto("Hotel Intercontinental", 4000));
stock.push(new Producto("Hotel Kingsdate Doha", 4200));
stock.push(new Producto("Hotel Plaza Doha", 3700));
stock.push(new Producto("Hotel Al Messila", 2500));
stock.push(new Producto("Vuelo desde Buenos Aires", 1000));
stock.push(new Producto("Vuelo desde Córdoba", 1200));
stock.push(new Producto("Vuelo desde Mendoza", 1800));
stock.push(new Producto("Vuelo desde Salta", 1500));
stock.push(new Producto("Vuelo desde Bariloche", 2200));
stock.push(new Producto("Alquiler de Auto", 370));
stock.push(new Producto("Alquiler de Camioneta", 520));
stock.push(new Producto("Alquiler de Moto", 250));
stock.push(new Producto("Entrada Partido Fase de Grupos", 500));
stock.push(new Producto("Entrada Partido Octavos de Final", 630));
stock.push(new Producto("Entrada Partido Cuartos de Final", 700));
stock.push(new Producto("Entrada Partido Semi Final", 850));
stock.push(new Producto("Entrada Partido Tercer Puesto", 740));
stock.push(new Producto("Entrada Partido Final del Mundo", 1200));
stock.push(new Producto("Asistencia al Viajero Parcial", 100));
stock.push(new Producto("Asistencia al Viajero Completa", 250));

stock.forEach((producto) => {
    const option = document.createElement("option");
    option.innerText = `${producto.nombre} a US$${producto.precio}`;
    option.value = stock.indexOf(producto);
    productosEnStock.append(option);
});

function newRow(item) {
    const row = document.createElement("tr");
    const pos = carrito.indexOf(item);
    let aux = document.createElement("th");
    aux.innerText = item.producto.nombre;
    row.append(aux);

    aux = document.createElement("th");
    aux.innerText = item.cantidad;
    const suma = document.createElement("button");
    suma.className = "btn btn-success";
    suma.innerText = "+";
    const resta = document.createElement("button");
    resta.className = "btn btn-danger";
    resta.innerText = "-";

    suma.onclick = () => {
        carrito[pos].cantidad++;
        listadoUpdate();
    };
    resta.onclick = () => {
        if (carrito[pos].cantidad > 0) {
            carrito[pos].cantidad--;
            listadoUpdate();
        }
    };

    aux.append(resta);
    aux.append(suma);

    row.append(aux);
    aux = document.createElement("th");
    aux.innerText = item.producto.precio;
    row.append(aux);
    const eliminarBtn = document.createElement("button");
    eliminarBtn.className = "btn btn-warning";
    eliminarBtn.innerText = "Borrar";
    eliminarBtn.onclick = () => {
        carrito.splice(pos, 1);
        listadoUpdate();
    };


    const th = document.createElement("th");
    th.append(eliminarBtn);
    row.append(th);
    tabla.append(row);
    const total = document.getElementById("total");
    total.innerText = carrito.reduce(
        (total, item) => total + item.producto.precio * item.cantidad,
        0
    );
}

function listadoUpdate() {
    tabla.innerHTML = "";
    carrito.forEach((item) => {
        newRow(item);
    });
    total.innerText = carrito.reduce(
        (total, item) => total + item.producto.precio * item.cantidad,
        0
    );
}

agregar.addEventListener("submit", (e) => {
    e.preventDefault();
    let producto = stock[productosEnStock.value];
    if (
        typeof carrito.find(
            (el) => el.producto.nombre == stock[productosEnStock.value].nombre
        ) === "undefined"
    ) {
        let nuevoElementoEnCarrito = new Item(producto, 1);
        carrito.push(nuevoElementoEnCarrito);
        newRow(nuevoElementoEnCarrito);
    }
});

vaciar.onclick = () => {
    carrito = [];
    listadoUpdate();
};

listadoUpdate();