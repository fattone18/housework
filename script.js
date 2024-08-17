currentDate = new Date();
//currentDate = new Date('00:01 05/15/2023');
refDate = new Date('04/04/2023'); // month day year
diffTime = Math.abs(refDate - currentDate);
diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));


// var year = new Date(currentDate.getFullYear(), 0, 1);
// var days = Math.floor((currentDate - year) / (24 * 60 * 60 * 1000));
// var week = Math.ceil(( currentDate.getDay() + 1 + days) / 7);
//var weekType = diffDays % 7;
var weekType = Math.floor(diffDays / 7) % 7;






// var settimana_corrente = document.getElementById('settimana_corrente');
// document.getElementById("settimana_corrente").innerHTML = week;
// var settimana_tipo = document.getElementById('settimana_tipo');
// document.getElementById("settimana_tipo").innerHTML = weekType;
// document.getElementById("settimana_tipo").innerHTML = weekType;

document.getElementById("data_oggi").innerHTML = currentDate;
document.getElementById("data_ref").innerHTML = refDate;
document.getElementById("differenza_date").innerHTML = diffDays;
document.getElementById("differenza_date_settimane").innerHTML =  Math.floor(diffDays / 7);
document.getElementById("tipo_settimana").innerHTML = weekType;

var corridoio = document.getElementById('corridoio');
var sala1 = document.getElementById('sala1');
var sala2 = document.getElementById('sala2');
var cucina = document.getElementById('cucina');
var terrazzo = document.getElementById('terrazzo');
var spazzatura1 = document.getElementById('spazzatura1');
var spazzatura2 = document.getElementById('spazzatura2');




var citazioni = [
        "Mi hanno spinto nella paglia, ne sono uscito pagliaccio",
        "Studia di meno, scopa di pi&#250",
        "Perch&#233 come disse mio zio sordomuto...",
        "Porco dio",
        "La vita &#232 come un pacco di farina. Su un&#8217isola sperduta. Senza cibo. E tu sei celiaco porco dio.",
        "Vuoi sapere come si tiene sulle spine un down?",
        "Del maiale non si butta via niente, per questo conservo con cura il mio crocifisso",
        "Noi ridiamo e scherziamo, ma dovremmo prima scherzare e poi ridere...",
        "Dio schifoso scarafaggio distributore di handicap",
        "Dopo la nostalgia, il collo è la parte pi&#250 debole dell&#8217uomo",
        "La vita &#232 come un milkshake: quando hai il latte non hai il gelato, quando hai il gelato non hai il latte"
];
        
var r = Math.floor(Math.random() * citazioni.length);
document.getElementById("citazione").innerHTML = citazioni[r];

var p1 = new String("Fabio");
var p2 = new String("Teresa");
var p3 = new String("Giacomo");
var p4 = new String("Martina");
var p5 = new String("Dalila");
var p6 = new String("Festim");
var p7 = new String("Carlo");


switch (weekType) {
        case 0:
                document.getElementById("corridoio").innerHTML = "Fabio";
                document.getElementById("sala1").innerHTML = "Teresa";
                document.getElementById("sala2").innerHTML = "Giacomo";
                document.getElementById("cucina").innerHTML = "Martina";
                document.getElementById("terrazzo").innerHTML = "Dalila";
                document.getElementById("spazzatura1").innerHTML = "Festim";
                document.getElementById("spazzatura2").innerHTML = "Carlo";
                break;
        case 1:
                /*
                document.getElementById("corridoio").innerHTML = "Carlo";
                document.getElementById("sala1").innerHTML = "Fabio";
                document.getElementById("sala2").innerHTML = "Teresa";
                document.getElementById("cucina").innerHTML = "Giacomo";
                document.getElementById("terrazzo").innerHTML = "Martina";
                document.getElementById("spazzatura1").innerHTML = "Dalila";
                document.getElementById("spazzatura2").innerHTML = "Festim";  
                break;
                */

                document.getElementById("corridoio").innerHTML = p7;
                document.getElementById("sala1").innerHTML = p1;
                document.getElementById("sala2").innerHTML = p2;
                document.getElementById("cucina").innerHTML = p3;
                document.getElementById("terrazzo").innerHTML = p4;
                document.getElementById("spazzatura1").innerHTML = p5;
                document.getElementById("spazzatura2").innerHTML = p6;  
                break;

        case 2:
                document.getElementById("corridoio").innerHTML = "Festim";
                document.getElementById("sala1").innerHTML = "Carlo";
                document.getElementById("sala2").innerHTML = "Fabio";
                document.getElementById("cucina").innerHTML = "Teresa";
                document.getElementById("terrazzo").innerHTML = "Giacomo";
                document.getElementById("spazzatura1").innerHTML = "Martina";
                document.getElementById("spazzatura2").innerHTML = "Dalila";  
                break;
        case 3:
                document.getElementById("corridoio").innerHTML = "Dalila";
                document.getElementById("sala1").innerHTML = "Festim";
                document.getElementById("sala2").innerHTML = "Carlo";
                document.getElementById("cucina").innerHTML = "Fabio";
                document.getElementById("terrazzo").innerHTML = "Teresa";
                document.getElementById("spazzatura1").innerHTML = "Giacomo";
                document.getElementById("spazzatura2").innerHTML = "Martina";  
                break;
        case 4:
                document.getElementById("corridoio").innerHTML = "Martina";
                document.getElementById("sala1").innerHTML = "Dalila";
                document.getElementById("sala2").innerHTML = "Festim";
                document.getElementById("cucina").innerHTML = "Carlo";
                document.getElementById("terrazzo").innerHTML = "Fabio";
                document.getElementById("spazzatura1").innerHTML = "Teresa";
                document.getElementById("spazzatura2").innerHTML = "Giacomo";  
                break;
        case 5:
                document.getElementById("corridoio").innerHTML = "Giacomo";
                document.getElementById("sala1").innerHTML = "Martina";
                document.getElementById("sala2").innerHTML = "Dalila";
                document.getElementById("cucina").innerHTML = "Festim";
                document.getElementById("terrazzo").innerHTML = "Carlo";
                document.getElementById("spazzatura1").innerHTML = "Fabio";
                document.getElementById("spazzatura2").innerHTML = "Teresa";  
                break;
        case 6:
                document.getElementById("corridoio").innerHTML = "Teresa";
                document.getElementById("sala1").innerHTML = "Giacomo";
                document.getElementById("sala2").innerHTML = "Martina";
                document.getElementById("cucina").innerHTML = "Dalila";
                document.getElementById("terrazzo").innerHTML = "Festim";
                document.getElementById("spazzatura1").innerHTML = "Carlo";
                document.getElementById("spazzatura2").innerHTML = "Fabio";  break;
}




//var weekType = week % 7;

//document.getElementById("settimana_corrente").innerHTML = week;

//console.log("Week Number of the current date (" + currentDate + ") is : " + week);
