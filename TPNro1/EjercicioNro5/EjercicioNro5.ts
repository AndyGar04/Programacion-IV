interface Electrico {
    consultarBateria(): void;
}

abstract class Vehiculo {

    protected _patente: string;  
    protected _color: string;
    protected _modelo: string;
    protected _cantKm: number;

    constructor(patente: string, color: string, modelo: string, cantKm: number){
        this._patente = patente;
        this._color = color;
        this._modelo = modelo;
        this._cantKm = cantKm; 
    }

    abstract avanzar(): void;
    abstract consultarKm(): void;
}

class Moto extends Vehiculo implements Electrico {
    private _cilindrada: number;

    constructor(patente: string, color: string, modelo: string, cantKm: number, cilindrada: number){
        super(patente, color, modelo, cantKm);
        this._cilindrada = cilindrada
    }

    avanzar(): void {
        console.log('La moto se esta moviendo hacia adelante!');
    }

    consultarKm(): void {
        console.log(`Esta moto tiene ${this._cantKm} kilometros!`);
    }

    consultarCilindrada(): number {
        return this._cilindrada
    }

    consultarBateria(): void {
        console.log("La batería de la moto está al 80%.");
    }
}

class Camioneta extends Vehiculo {
    private _tieneEnganche: boolean;
    private _numeroPuertas: number;

    constructor(patente: string, color: string, modelo: string, cantKm: number, tieneEnganche: boolean, numeroPuertas: number) {
        super(patente, color, modelo, cantKm);
        this._tieneEnganche = tieneEnganche;
        this._numeroPuertas = numeroPuertas;
    }

    consultarNumeroDePuertas(): number {
        return this._numeroPuertas;
    }

    avanzar(): void {
        console.log('La camioneta se esta moviendo hacia adelante!');
    }

    consultarKm(): void {
        console.log(`Esta camioneta tiene ${this._cantKm} kilometros!`);
    }
}

const motito = new Moto("ADF 234", "Verde", "Gilera", 126000, 600);
motito.avanzar();
motito.consultarKm();
console.log(`El cilindrado de la moto es ${motito.consultarCilindrada()}`);
motito.consultarBateria();

const camionetita = new Camioneta("ASF 123", "Gris", "F100", 660000, true, 4);
camionetita.avanzar();
camionetita.consultarKm();
console.log(`El numero de puertas de la camioneta es ${camionetita.consultarNumeroDePuertas()}`);
