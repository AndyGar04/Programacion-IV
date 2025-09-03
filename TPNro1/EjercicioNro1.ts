/*Ejercicio 1: Interfaces
    Definir una interface Animal que tenga los siguientes métodos:
        ● hacerSonido(): void
        ● moverse(): void
    Luego, implementar la interface en una clase concreta llamada Perro que imprima en consola:
        ● "Guau!" al llamar hacerSonido()
        ● "El perro corre" al llamar moverse()
*/

//Declaro la interfaz
interface Animal {
    hacerSonido(): void;
    moverse(): void;
}

//Creo la clase "Perro"
class Perro implements Animal {
    hacerSonido(): void {
        console.log("Guaf, Guaf");
    }

    moverse(): void {
        console.log("El perro esta corriendo");
    }
}

//Creo un Perro para probar
const doki = new Perro();
doki.hacerSonido();
doki.moverse();
