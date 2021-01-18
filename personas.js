function Persona(nombre, capacidadDePagoEnCuotas, capacidadDePagoTotal){
    this.nombre = nombre;
    this.capacidadDePagoEnCuotas = capacidadDePagoEnCuotas;
    this.capacidadDePagoTotal = capacidadDePagoTotal;
}

let personaA = new Persona("Juan", "15000", "200000") ;
let personaB = new Persona("Juan", "30000", "500000") ;
let personaC = new Persona("Juan", "40000", "600000") ;

let personas = [personaA, personaB, personaC];

module.exports= personas