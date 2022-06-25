function suma (a, b, c){
    return a +b +c;
}

suma (5, 9, 10);

class Coche {
    constructor(nroPuertas){
    this.nroPuertas = nroPuertas;
    }
    aumentarPuertas() {
        nroPuertas + 1;
    }
}

let miCoche = new Coche(4);

miCoche.aumentarPuertas();

console.log(miCoche.nroPuertas)