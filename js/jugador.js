/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades
  mover: function (x, y) {
    this.x = x;
    this.y = y;
  },
  cambiarSpriteDireccion: function (direccion) {
    var imagen = 'imagenes/auto_rojo_' + direccion + '.png';
    if (direccion === 'derecha' || direccion === 'izquierda') {
      this.alto = 15;
      this.ancho = 30;
    } else {
      this.alto = 30;
      this.ancho = 15;
    }
    this.sprite = imagen;
  },
  perderVidas: function (cantidadVidas) {
    this.vidas -= cantidadVidas;
  }
}
