
currentDate = new Date();
refDate = new Date('04/04/2023'); // month day year
diffTime = Math.abs(refDate - currentDate);
diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

var weekType = Math.floor(diffDays / 7) % 7;

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
var p3 = new String("Alessandro");
var p4 = new String("Tina");
var p5 = new String("Marty");
var p6 = new String("Festim");
var p7 = new String("Carlo");

switch (weekType) {
        case 0:
                document.getElementById("corridoio").innerHTML = p1;
                document.getElementById("sala1").innerHTML = p2;
                document.getElementById("sala2").innerHTML = p3;
                document.getElementById("cucina").innerHTML = p4;
                document.getElementById("terrazzo").innerHTML = p5;
                document.getElementById("spazzatura1").innerHTML = p6;
                document.getElementById("spazzatura2").innerHTML = p7;
                break;
        case 1:                
                document.getElementById("corridoio").innerHTML = p7;
                document.getElementById("sala1").innerHTML = p1;
                document.getElementById("sala2").innerHTML = p2;
                document.getElementById("cucina").innerHTML = p3;
                document.getElementById("terrazzo").innerHTML = p4;
                document.getElementById("spazzatura1").innerHTML = p5;
                document.getElementById("spazzatura2").innerHTML = p6;  
                break;
        case 2:
                document.getElementById("corridoio").innerHTML = p6;
                document.getElementById("sala1").innerHTML = p7;
                document.getElementById("sala2").innerHTML = p1;
                document.getElementById("cucina").innerHTML = p2;
                document.getElementById("terrazzo").innerHTML = p3;
                document.getElementById("spazzatura1").innerHTML = p4;
                document.getElementById("spazzatura2").innerHTML = p5;  
                break;
        case 3:
                document.getElementById("corridoio").innerHTML = p5;
                document.getElementById("sala1").innerHTML = p6;
                document.getElementById("sala2").innerHTML = p7;
                document.getElementById("cucina").innerHTML = p1;
                document.getElementById("terrazzo").innerHTML = p2;
                document.getElementById("spazzatura1").innerHTML = p3;
                document.getElementById("spazzatura2").innerHTML = p4;  
                break;
        case 4:
                document.getElementById("corridoio").innerHTML = p4;
                document.getElementById("sala1").innerHTML = p5;
                document.getElementById("sala2").innerHTML = p6;
                document.getElementById("cucina").innerHTML = p7;
                document.getElementById("terrazzo").innerHTML = p1;
                document.getElementById("spazzatura1").innerHTML = p2;
                document.getElementById("spazzatura2").innerHTML = p3;  
                break;
        case 5:
                document.getElementById("corridoio").innerHTML = p3;
                document.getElementById("sala1").innerHTML = p4;
                document.getElementById("sala2").innerHTML = p5;
                document.getElementById("cucina").innerHTML = p6;
                document.getElementById("terrazzo").innerHTML = p7;
                document.getElementById("spazzatura1").innerHTML = p1;
                document.getElementById("spazzatura2").innerHTML = p2;  
                break;
        case 6:
                document.getElementById("corridoio").innerHTML = p2;
                document.getElementById("sala1").innerHTML = p3;
                document.getElementById("sala2").innerHTML = p4;
                document.getElementById("cucina").innerHTML = p5;
                document.getElementById("terrazzo").innerHTML = p6;
                document.getElementById("spazzatura1").innerHTML = p7;
                document.getElementById("spazzatura2").innerHTML = p1;  
                break;
}
