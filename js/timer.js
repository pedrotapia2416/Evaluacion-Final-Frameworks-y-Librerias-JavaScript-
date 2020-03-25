// 4 - TEMPORIZADOR - Juego Terminado

function startTimer() {
  var presentTime = $('#timer').html();
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}  //Juego Terminado
  if(m<0){
  	clearInterval(tiempo)
  	clearInterval(carga)
  	clearInterval(eliminar)
  	clearInterval(newdulces)
  	$(".btn-reinicio").html("Iniciar")
  	$("div.panel-tablero").hide("explode", 1000)
  	$("div.time").hide("drop",{direction: "right"}, 1000)
  	$("div.panel-score").css("width","+=75%")
  	$("div.score").hide("drop",{direction: "right"}, 1000)
  	$("div.moves").hide("drop",{direction: "right"}, 1000)
  	$("div.buttons").hide("drop",{direction: "down"}, 1000)
  	$("<h3 class='main-titulo' style='display:none'>Juego Terminado</h3>").insertAfter("h1")
  	$("div.score").show("bounce", 1000)
  	$("div.moves").show("bounce", 1000)
  	$("div.buttons").show("fade", 1000)
  	$("h3").show("bounce", 1000)
  }

  $("#timer").html(m + ":" + s);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}
