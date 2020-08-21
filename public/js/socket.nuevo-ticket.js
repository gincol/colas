// Comando para establecer la conexión
var socket = io();

var label = $("#lblNuevoTicket");

// escuchar sucesos
socket.on("connect", function () {
  console.log("Contectado al servidor");
});
// escuchar sucesos
socket.on("disconnect", function () {
  console.log("Perdimos la conexión al servidor");
});

// escuchar información
socket.on("estadoActual", function (mensaje) {
  label.text(mensaje.actual);
});

$("button").on("click", function () {
  socket.emit("siguienteTicket", null, function (siguienteTicket) {
    label.text(siguienteTicket);
  });
});
