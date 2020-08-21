// Comando para establecer la conexión
var socket = io();

var labelTicket1 = $("#lblTicket1");
var labelTicket2 = $("#lblTicket2");
var labelTicket3 = $("#lblTicket3");
var labelTicket4 = $("#lblTicket4");

var lblEscritorio1 = $("#lblEscritorio1");
var lblEscritorio2 = $("#lblEscritorio2");
var lblEscritorio3 = $("#lblEscritorio3");
var lblEscritorio4 = $("#lblEscritorio4");

var lblTickets = [labelTicket1, labelTicket2, labelTicket3, labelTicket4];
var lblEscritorios = [
  lblEscritorio1,
  lblEscritorio2,
  lblEscritorio3,
  lblEscritorio4,
];

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
  actualizaHTML(mensaje.ultimos4);
});

socket.on("ultimos4", function (mensaje) {
  console.log("mensaje ", mensaje);
  if (mensaje.atenderTicket !== "No hay tickets") {
    var audio = new Audio("audio/new-ticket.mp3");
    audio.play();
  }
  actualizaHTML(mensaje.ultimos4);
});

function actualizaHTML(ultimos4) {
  for (var i = 0; i < ultimos4.length; i++) {
    lblTickets[i].text("Tiket " + ultimos4[i].numero);
    lblEscritorios[i].text("Escritorio " + ultimos4[i].escritorio);
  }
}
