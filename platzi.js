var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: "tile.png",
  cargaOK:false
};

var vaca = {
  url: "vaca.png",
  cargaOK:false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

function cargarFondo(){
  fondo.cargaOK =true;
  dibujar();

}

function cargarVaca(){
  fondo.cargaOK =true;
  dibujar();
}

function dibujar ()
{

  if (fondo.cargaOK) {

  papel.drawImage(fondo.imagen, 0, 0);
  }
}



function aleatorio (min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}




//for (var i = 0; i < 10; i++) {
  //z = aleatorio(10, 20);
  //document.write(z + ", ");


//}
