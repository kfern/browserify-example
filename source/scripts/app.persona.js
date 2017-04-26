var Persona = function(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;

  var self = this;

  return {
    saludar: function() {
      console.log("Hola, mi nombre es " + self.nombre);
    },

    presentar: function() {
      console.log("Tengo " + self.edad + " años.");
    }
  };
}

module.exports = Persona;
