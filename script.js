currentDate = new Date();
refDate = new Date('05/02/2023');
const diffTime = Math.abs(refDate - currentDate);
diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));


// var year = new Date(currentDate.getFullYear(), 0, 1);
// var days = Math.floor((currentDate - year) / (24 * 60 * 60 * 1000));
// var week = Math.ceil(( currentDate.getDay() + 1 + days) / 7);
var weekType = diffDays % 7;






// var settimana_corrente = document.getElementById('settimana_corrente');
// document.getElementById("settimana_corrente").innerHTML = week;
// var settimana_tipo = document.getElementById('settimana_tipo');
// document.getElementById("settimana_tipo").innerHTML = weekType;
var corridoio = document.getElementById('corridoio');
var sala1 = document.getElementById('sala1');
var sala2 = document.getElementById('sala2');
var cucina = document.getElementById('cucina');
var corridoio = document.getElementById('terrazzo');


var citazioni = [
        "Mi hanno spinto nella paglia, ne sono uscito pagliaccio",
        "Jiii ji ji ja",
        "Studia di meno, s***a di pi&#250",
        "&#200 l&#8217ora delle canne"];
var r = Math.floor(Math.random() * citazioni.length);
document.getElementById("citazione").innerHTML = citazioni[r];


switch (weekType) {
  case 0:
    document.getElementById("corridoio").innerHTML = "Fabio";
    document.getElementById("sala1").innerHTML = "Cristina";
    document.getElementById("sala2").innerHTML = "Giacomo";
    document.getElementById("cucina").innerHTML = "Laila";
    document.getElementById("terrazzo").innerHTML = "Dalila";
    break;
  case 1:
  document.getElementById("corridoio").innerHTML = "Davide";
  document.getElementById("sala1").innerHTML = "Fabio";
  document.getElementById("sala2").innerHTML = "Cristina";
  document.getElementById("cucina").innerHTML = "Giacomo";
  document.getElementById("terrazzo").innerHTML = "Laila";  break;
  case 2:
  document.getElementById("corridoio").innerHTML = "Lumi";
  document.getElementById("sala1").innerHTML = "Davide";
  document.getElementById("sala2").innerHTML = "Fabio";
  document.getElementById("cucina").innerHTML = "Cristina";
  document.getElementById("terrazzo").innerHTML = "Giacomo";  break;
  case 3:
  document.getElementById("corridoio").innerHTML = "Dalila";
  document.getElementById("sala1").innerHTML = "Lumi";
  document.getElementById("sala2").innerHTML = "Davide";
  document.getElementById("cucina").innerHTML = "Fabio";
  document.getElementById("terrazzo").innerHTML = "Cristina";  break;
  case 4:
  document.getElementById("corridoio").innerHTML = "Laila";
  document.getElementById("sala1").innerHTML = "Dalila";
  document.getElementById("sala2").innerHTML = "Lumi";
  document.getElementById("cucina").innerHTML = "Davide";
  document.getElementById("terrazzo").innerHTML = "Fabio";  break;
  case 5:
  document.getElementById("corridoio").innerHTML = "Giacomo";
  document.getElementById("sala1").innerHTML = "Laila";
  document.getElementById("sala2").innerHTML = "Dalila";
  document.getElementById("cucina").innerHTML = "Lumi";
  document.getElementById("terrazzo").innerHTML = "Davide";  break;
  case 6:
  document.getElementById("corridoio").innerHTML = "Cristina";
  document.getElementById("sala1").innerHTML = "Giacomo";
  document.getElementById("sala2").innerHTML = "Laila";
  document.getElementById("cucina").innerHTML = "Dalila";
  document.getElementById("terrazzo").innerHTML = "Lumi";  break;
}




//var weekType = week % 7;

//document.getElementById("settimana_corrente").innerHTML = week;

//console.log("Week Number of the current date (" + currentDate + ") is : " + week);
