var fotos = ["cheddar.jpg", "pudim.jpg","cheddar2.jpg", "pudim2.jpg"];

var frases = ["a cheddr roubar comida do pudim",
"pudim e bravo",
"a che vai virar calva",
"pudim sendo posuido por demonios"
];

var i = 0;

function proximaFoto(){
    var atualizarfoto = fotos [i];
    var atuarlizarfrase = frases [i];
    document.getElementById("fotinhas").src=atualizarfoto;
    document.getElementById("texto").innerHTML=atuarlizarfrase;
    i++;
if(i>3){
    i=0;
}
    
}