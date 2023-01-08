var text = 0;
var actualtext = 'Ik ben Caner Ilbin, een 22-jarige student programmeren aan de Hogeschool PXL. Ik ben een gedreven en gemotiveerde programmeur die resultaatgericht en probleemoplossend te werk gaat. Naast programmeren houd ik me graag in goede fysieke conditie in de sportschool, daarnaast game ik ook graag.'+
    'Naast programmeren wil ik me ook verdiepen in het maken van ontwerpen en het animeren daarvan. Professionele videobewerking spreekt me ook erg aan.';
var speed = 50;

function AutoTypetxt() {
if (text < actualtext.length) {
    document.getElementById("generate_text").innerHTML += actualtext.charAt(text);
    text++;
    setTimeout(AutoTypetxt, speed);
}
}