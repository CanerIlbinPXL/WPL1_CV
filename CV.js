var text = 0;
var actualtext = 'Ik ben Caner Ilbin, een 21-jarige student programmeren aan de Hogeschool PXL. Ik ben een gedreven en gemotiveerde programmeur die resultaatgericht en probleemoplossend te werk gaat. Naast programmeren hou ik mezelf ook graag in een goede fysieke vorm in de sportschool, daarnaast game ik ook graag.';
var speed = 50;

function AutoTypetxt() {
if (text < actualtext.length) {
    document.getElementById("generate_text").innerHTML += actualtext.charAt(text);
    text++;
    setTimeout(AutoTypetxt, speed);
}
}