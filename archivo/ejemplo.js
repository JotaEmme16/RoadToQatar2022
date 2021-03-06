// CLASES
class Alojamiento{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}
class Vuelos{
    constructor(desde, precio){
        this.desde = desde;
        this.precio = precio;
    }
}
class Alquiler{
    constructor(vehiculo, precio){
        this.vehiculo = vehiculo;
        this.precio = precio;
    }
}
class Excursiones{
    constructor(excursion, precio){
        this.excursion = excursion;
        this.precio = precio;
    }
}
class Seguro{
    constructor(medico, precio){
        this.medico = medico;
        this.precio = precio;
    }
}

// OPCIONES PARA ELEGIR
const hoteles = [];
hoteles.push(new Alojamiento("Hilton", 5000));
hoteles.push(new Alojamiento("Intercontinental", 4000));
hoteles.push(new Alojamiento("Kingsdate Doha", 4200));
hoteles.push(new Alojamiento("Plaza Doha", 3700));
hoteles.push(new Alojamiento("Al Messila", 2500));

const aereos = [];
aereos.push(new Vuelos("Buenos Aires", 1000));
aereos.push(new Vuelos("Córdoba", 1200));
aereos.push(new Vuelos("Mendoza", 1800));
aereos.push(new Vuelos("Salta", 1500));
aereos.push(new Vuelos("Bariloche", 2200));

const rentacar = [];
rentacar.push(new Alquiler("Auto", 370));
rentacar.push(new Alquiler("Camioneta", 520));
rentacar.push(new Alquiler("Moto", 250));

const partidos = [];
partidos.push(new Excursiones("Partido Fase de Grupos", 500));
partidos.push(new Excursiones("Partido Octavos de Final", 630));
partidos.push(new Excursiones("Partido Cuartos de Final", 700));
partidos.push(new Excursiones("Partido Semi Final", 850));
partidos.push(new Excursiones("Partido Tercer Puesto", 740));
partidos.push(new Excursiones("Partido Final del Mundo", 1200));

const asistencia = [];
asistencia.push(new Seguro("Parcial", 100));
asistencia.push(new Seguro("Completo", 250));

// OPCIONES EN EL HTML
const alojamientoitem = document.getElementById("alojamiento");
hoteles.forEach((alojamiento) => {
    const option = document.createElement("option");
    option.innerText = `${alojamiento.nombre} - US$${alojamiento.precio}`;
    option.value = hoteles.indexOf(alojamiento);
    alojamientoitem.append(option);
});

const aereositem = document.getElementById("vuelos");
aereos.forEach((vuelos) => {
    const option = document.createElement("option");
    option.innerText = `${vuelos.desde} - US$${vuelos.precio}`;
    option.value = aereos.indexOf(vuelos);
    aereositem.append(option);
});

const alquileritem = document.getElementById("alquiler");
rentacar.forEach((alquiler) => {
    const option = document.createElement("option");
    option.innerText = `${alquiler.vehiculo} - US$${alquiler.precio}`;
    option.value = rentacar.indexOf(alquiler);
    alquileritem.append(option);
});

const excursionesitem = document.getElementById("excursiones");
partidos.forEach((excursiones) => {
    const option = document.createElement("option");
    option.innerText = `${excursiones.excursion} - US$${excursiones.precio}`;
    option.value = partidos.indexOf(excursiones);
    excursionesitem.append(option);
});

const seguroitem = document.getElementById("seguro");
asistencia.forEach((seguro) => {
    const option = document.createElement("option");
    option.innerText = `${seguro.medico} - US$${seguro.precio}`;
    option.value = asistencia.indexOf(seguro);
    seguroitem.append(option);
});

// PARÁMETROS EN EL HTML
const tabla = document.getElementById("items");
const agregaralojamiento = document.getElementById("agregaralojamiento");
const agregarvuelo = document.getElementById("agregarvuelo");
const agregaralquiler = document.getElementById("agregaralquiler");
const agregarentradas = document.getElementById("agregarentradas");
const agregarseguro = document.getElementById("agregarseguro");
const vaciar = document.getElementById("vaciar");

// ARRAY GENERAL
let paquete = [];

// FUNCIONES
// ALOJAMIENTO
function nuevafila(item){
    const fila = document.createElement("tr");
    const ver = paquete.indexOf(item);

    let columna = document.createElement("th");
    columna.innerText = item.nombre.nombre;
    fila.append(columna);

    columna = document.createElement("th");
    let hospedaje = document.getElementById("hospedaje").value;
    columna.innerText = item.nombre.precio * hospedaje;
    fila.append(columna);

    const botoneliminar = document.createElement("button");
    botoneliminar.className = "btn btn-danger";
    botoneliminar.innerText = "Borrar";
    botoneliminar.onclick = () => {
        paquete.splice(ver, 1);
        actualizacion(); 
    };

    const th = document.createElement("th");

    th.append(botoneliminar);
    fila.append(th);
    tabla.append(fila);

    const total = document.getElementById("total");
    total.innerText = paquete.reduce(
        (total, item) => total + item.nombre.precio * hospedaje, 0);
};

function actualizacion(){
    tabla.innerHTML = "";
    paquete.forEach((item) => {
        nuevafila(item)
    });
    total.innerText = paquete.reduce(
        (total, item) => total + item.nombre.precio, 0);
};

agregaralojamiento.addEventListener("submit", (e) => {
    e.preventDefault();
    let alojamiento = hoteles[alojamientoitem.value];
    if (
        typeof paquete.find(
            (el) => el.nombre.nombre == hoteles[alojamientoitem.value].nombre) === "undefined");
    {
        let nuevoElemento = new Alojamiento(alojamiento);
        paquete.push(nuevoElemento);
        nuevafila(nuevoElemento);
    }
});

vaciar.onclick = () => {
    paquete = [];
    actualizacion();
};

actualizacion();

// VUELOS
function nuevafilavuelos(item){
    const fila = document.createElement("tr");
    const ver = paquete.indexOf(item);

    let columnav = document.createElement("th");
    columnav.innerText = item.desde.desde;
    fila.append(columnav);

    columnav = document.createElement("th");
    let pasajeros = document.getElementById("pasajeros").value;
    columnav.innerText = item.desde.precio * pasajeros;
    fila.append(columnav);

    const botoneliminar = document.createElement("button");
    botoneliminar.className = "btn btn-danger";
    botoneliminar.innerText = "Borrar";
    botoneliminar.onclick = () => {
        paquete.splice(ver, 1);
        actualizacionvuelos(); 
    };

    const th = document.createElement("th");

    th.append(botoneliminar);
    fila.append(th);
    tabla.append(fila);

    const total = document.getElementById("total");
    total.innerText = paquete.reduce(
        (total, item) => total + item.desde.precio * pasajeros, 0);
};

function actualizacionvuelos(){
    tabla.innerHTML = "";
    paquete.forEach((item) => {
        nuevafilavuelos(item)
    });
    total.innerText = paquete.reduce(
        (total, item) => total + item.desde.precio, 0);
};

agregarvuelo.addEventListener("submit", (e) => {
    e.preventDefault();
    let avion = aereos[aereositem.value];
    if (
        typeof paquete.find(
            (el) => el.desde.desde == aereos[aereositem.value].desde) === "undefined");
    {
        let nuevoAvion = new Vuelos(avion);
        paquete.push(nuevoAvion);
        nuevafilavuelos(nuevoAvion);
    }
});

vaciar.onclick = () => {
    paquete = [];
    actualizacionvuelos();
};

actualizacionvuelos();