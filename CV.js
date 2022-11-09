var text = 0;
var actualtext = 'Ik ben Caner Ilbin, een 21-jarige student programmeren aan de Hogeschool PXL. Ik ben een gedreven en gemotiveerde programmeur die resultaatgericht en probleemoplossend te werk gaat. Naast programmeren hou ik mezelf ook graag in shape door met zware objecten te gooien in de sportschool, daarnaast ben ik ook een hardcore gamer.';
var speed = 50;

function AutoTypetxt() {
if (text < actualtext.length) {
    document.getElementById("generate_text").innerHTML += actualtext.charAt(text);
    text++;
    setTimeout(AutoTypetxt, speed);
}
}