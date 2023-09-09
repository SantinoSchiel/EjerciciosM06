var deportes = {
    conBalon: ["Football","Basketball","Rugby"], 
    sinBalon: ["Boxeo","Surf","Trekking"]
};

var persona = {
    nombre: "Lucas", edad: 26, estudios: {esProgramados: true}
};

console.log(persona.edad);

persona.nombre = "Martin";

console.log (persona.nombre);

persona.edad = 30;

console.log(persona.edad)

var autos = {};
autos.marcas = ['Ford', 'Audi', "Ferrari"]

console.log(autos)

delete autos.marcas;
console.log(autos);

var misFunciones = {
    saludar: function() {
        console.log('Hola');
    }
};

misFunciones.saludar();

// DOT NOTATION
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };

// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);

var comidas = {};
var diferenciaDeNotacion = function(PropUno,PropDos){
    comidas[PropUno] = ['Frutas','Vegetales'];
    comidas[PropDos] = ['Hamburgesa','PapasFritas'];
};
diferenciaDeNotacion('saludable','noSaludable');
console.log(comidas);

// HAS OWN PROPERTY
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('nombre');

console.log(tienePropiedad);
// KEYS
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);

console.log(todasLasPropiedades);

var mundo = {continentes:7, paises:195, oceanos:5}

for (let prop in mundo) {
   console.log('Esta es la propiedad: ', prop);
   console.log('Este es el valor: ', mundo[prop]);
}
//THIS
var mascota = {
   animal: 'Perro',
   raza: 'Ovejero Alemán',
   amistoso: true,
   dueño: 'María López',
   info: () => {
      console.log('Mi perro es un  ' + this.raza);
   },
};