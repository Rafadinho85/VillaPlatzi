var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa ="tile.png";

var fondo = new Image();
fondo.src = mapa;
fondo.addEventListener("load", dibujar);

var vaca = new Image();
vaca.src = "vaca.png";
vaca.addEventListener("load", dibujarvaca);

var cerdo = new Image();
cerdo.src = "cerdo.png";
cerdo.addEventListener("load", dibujarcerdo);

var pollo = new Image();
pollo.src = "pollo.png";
pollo.addEventListener("load", dibujarpollo);


function dibujar ()
{
papel.drawImage(fondo, 0, 0);
}

function dibujarvaca ()
{
papel.drawImage(vaca, 10, 10);
}

function dibujarcerdo ()
{
papel.drawImage(cerdo, 20, 20);
}

function dibujarpollo ()
{
papel.drawImage(pollo, 30, 30);
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
