
function saludar() {
    alert("Bienvenido " + usuario)
};

alert("Bienvenido a Alquiler De Coches");

let nombreDeUsuario = prompt("Nombre");

let apellidoDeUsuario = prompt("Apellido");

let usuario = (nombreDeUsuario + " " + apellidoDeUsuario);

saludar();


class Auto {
    constructor(id, nombre, precio) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
       
}

const Auto1 = new Auto(1, "Honda Civic ", 50000);
const Auto2 = new Auto(2, "Ford Mondeo ", 70000);
 
let Autos = []
Autos.push(Auto1);
Autos.push(Auto2);

 

let opcion = parseInt(prompt("Elige un auto:  1. Honda Civic  2. Ford Mondeo"))

for (let p of Autos) {
    if (p.id == opcion) {
        alert("Elegiste $ " + p.nombre + p.precio)
    }
}

alert("Alquilaste tu auto " + usuario)
