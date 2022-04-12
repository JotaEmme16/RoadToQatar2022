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
    constructor(nombre, precio){
        this.nombre = nombre;
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
    option.innerText = `${seguro.nombre} - US$${seguro.precio}`;
    option.value = asistencia.indexOf(seguro);
    seguroitem.append(option);
});

// PARÁMETROS EN EL HTML
const tabla = document.getElementById("paquetefinal");
const agregar = document.getElementsByClassName("agregar");
const vaciar = document.getElementById("vaciar");

// MODIFICADORES DE LAS OPCIONES
const hospedaje = parseInt(document.getElementById("hospedaje").value);

const pasasejos = parseInt(document.getElementById("pasajeros").value);

const dias = parseInt(document.getElementById("uso").value);

const paxexcursion = parseInt(document.getElementById("paxexcursion").value);

const paxasistencia = parseInt(document.getElementById("paxasistencia").value);
const diasviaje = parseInt(document.getElementById("diasviaje").value);

// ARRAY GENERAL
const paquete = [];

