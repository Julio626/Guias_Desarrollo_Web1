function Persona(_nombre, _apellido, _edad){
    this.nombre = _nombre;
    this._apellido = _apellido;
    this.edad = _edad;
    this.saludar = function(){
        console.log(`Hola mi nombre es ${this.nombre}`)
    }
}
const persona1 = new Persona("Chris", "Sanchez", 20);
const persona2 = new Persona("Diego", "Cabezas", 20);

persona1.saludar();
persona2.saludar();
console.log(persona1);
console.log(persona2);

Persona.prototype.saludarIngles = function(){
    console.log(`Hi! my name is ${this.nombre}`);
}