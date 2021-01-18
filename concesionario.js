
let autos = require("./autos");
let personas = require("./personas")
//console.log(autos);

//console.log(comprador);

function buscarPatente(a){   
    let especificacion = null;
    for (const auto of autos) {
        let patente = auto.patente;
        if(patente == a){
            especificacion = auto;
        }
    }
    return especificacion;
}

function comprobarCompra(auto, persona){
    let puedePagar = auto.precio <= persona.capacidadDePagoTotal ?  true:false 
    let enCuotas = auto.precio / auto.cuotas 
    let puedePagarCuotas = enCuotas <= persona.capacidadDePagoEnCuotas ?  true:false
    return puedePagar == puedePagarCuotas
}

function autosPorComprar(persona){
    let arrayAutosVenta = concesionaria.autosParaLaVenta()
    let patentes = [];
    for (const auto of arrayAutosVenta) {
        if (comprobarCompra(auto, persona)){
            patentes.push(auto.patente)
        }
    }
    return patentes

}
const concesionaria ={
    autos: autos,
    buscarAuto: function(patente){
        return buscarPatente(patente)
    },
    venderAuto: function(patente){
        const datosAuto = buscarPatente(patente);
        return datosAuto.vendido = true;
    },
    autosParaLaVenta: function(){
         let vendidos = this.autos.filter(function(auto){
            return auto.vendido == false;
         })    
         return vendidos
    },
    autosNuevos: function(){
        let nuevos = this.autosParaLaVenta().filter(function(auto){
            return auto.km < 100;
        })
        return nuevos
    },
    listaDeVentas : function(){
         let vendidos = this.autos.filter(function(auto){
            return auto.vendido == true;
         })   
         
         let precios = []
         for (const auto of vendidos) {
            let datosPatente = auto.patente 
            let datosPrecios = auto.precio
            precios.push([datosPatente, datosPrecios])
         }
         return precios
    },
    totalDeVentas: function(){
       let lista =  this.listaDeVentas()
       let nuevaLista = []
       for (const precio of lista) {
           nuevaLista.push(precio[1])
       }
       let totalVentas = nuevaLista.reduce(function(estado, numeros){
           return estado + numeros
       })
       return totalVentas;
    },
    puedeComprar : function(auto, persona){
        return comprobarCompra(auto, persona)    
    },
    autosQuePuedeComprar: function(persona){
        return autosPorComprar(persona);
    }


} 
 
let autoGustado = concesionaria.buscarAuto("APL123");
let comprador = personas[0];

console.log(concesionaria.autosQuePuedeComprar(comprador));
//console.log(comprobarCompra(autoGustado, comprador));
