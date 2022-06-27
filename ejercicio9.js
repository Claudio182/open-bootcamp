class Persona {
    constructor(nombre, edad, telefono){
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
    }
}

class Cliente extends Persona{
    constructor(nombre, edad, telefono, credito){
        super(nombre, edad, telefono);
        this.credito = credito;
    }

    printElements() {
        let elementos = {
            Nombre: this.nombre, 
            Edad: this.edad, 
            Telefono: this.telefono, 
            Credito: this.credito
        }
        console.log(elementos);
    }
}

class Trabajador extends Persona{
    constructor(nombre, edad, telefono, salario){
        super(nombre, edad, telefono);
        this.salario = salario;
    }

    printElements() {
        let elementos = {
            Nombre: this.nombre, 
            Edad: this.edad, 
            Telefono: this.telefono, 
            Salario: this.salario
        }
        console.log(elementos);
    }
}

let trabajador1 = new Trabajador("Jose", 25, 235654, 40000);
let cliente1 = new Cliente("Alejandro", 32, 2378967, 1000);

trabajador1.printElements();

cliente1.printElements()
