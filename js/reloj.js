const mostrarReloj = () => {
  let fecha = new Date();
  let hr = formatoHora(fecha.getHours());
  let min = formatoHora(fecha.getMinutes());
  let seg = formatoHora(fecha.getSeconds());
  document.getElementById("hora").innerHTML = `${hr}:${min}:${seg}`;

  const meses = [
    "Ene",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dias = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
  let diaSemana = dias[fecha.getDay()];
  let dia = fecha.getDate();
  let mes = meses[fecha.getMonth()];
  let fechaTexto = `${diaSemana}, ${dia} ${mes} ${fecha.getFullYear()}`;
  document.getElementById("fecha").innerHTML = fechaTexto;

  document.getElementById("contenedor").classList.toggle("animar");
};

const formatoHora = (hora) => {
  if (hora < 10) {
    hora = "0" + hora;
  }
  return hora;
};

//Esta funcion llama a la funcion cada segundo
setInterval(mostrarReloj, 1000);
