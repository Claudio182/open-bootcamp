class Persona {
    #nombre;
    #edad;
    #direccion;

    // get set nombre
    set nombre(nombre){
        this.#nombre = nombre;
    }
    get nombre(){
        return this.#nombre;
    }
    //get set edad
    set edad(edad){
        this.#edad = edad;
    }
    get edad(){
        return this.#edad;
    }
    //get set dirección
    set direccion(direccion){
        this.#direccion = direccion;
    }
    get direccion(){
        return this.#direccion;
    }
}

let persona = new Persona();

persona.nombre = "Claudio";
persona.edad = 33;
persona.direccion = "Lorca Prieto";

console.log(`Soy ${persona.nombre} de ${persona.edad} y vivo en ${persona.direccion}`);