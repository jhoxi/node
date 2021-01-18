
function Auto (marca, modelo, precio, km, color, cuotas, anio, patente, vendido){
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.km = km;
    this.color = color;
    this.cuotas = cuotas;
    this.anio = anio;
    this.patente = patente;
    this.vendido = vendido;
 }
 
 var primerAuto = new Auto("Ford", "Fiesta", 150000, 200, "Azul", 12, 2019, "APL123", false);
 var segundoAuto = new Auto("Toyota", "Corolla",100000, 0, "Blanco", 14, 2019, "JJK116", false )
 var tercerAuto = new Auto("BMW", "ABC",90, 1110, "Gris", 14, 2019, "LPM", true )

 var autos = [primerAuto, segundoAuto, tercerAuto]
 

module.exports = autos;