// parte 1

let numeroif;

if (numeroif < 0) {
    return "Este numero es negativo"
}
else if (numeroif > 0) {
    return "este numero es positivo"
}
else {
    return "Este numero es Cero"
}

// parte 2

let numeroWhile = 0;

while (numeroWhile < 3){
    console.log(numeroWhile);
    numeroWhile++;
}

// parte 3

let numeroWhile2 = 0;

do {
    console.log(numeroWhile2);
    numeroWhile2++
}while (numeroWhile2 < 2)

// parte 4 

let numeroFor = 0;

for (let i = 0; numeroFor <= 3; i++){
    console.log(i);
}

// parte 5 

let estacion;

switch (estacion) {
    case "verano":
        console.log("Es verano");
        break;
    case "otoño":
        console.log("Es otoño");
        break;
    case "invierno":
        console.log("es invierno");
        break;
    case "primavera":
        console.log("Es primavera");
        break;
    default:
        console.log("No corresponde a una estación")
        break;
}