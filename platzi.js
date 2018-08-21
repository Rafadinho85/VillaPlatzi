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

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
}

var pollo = {
  url:"pollo.png",
  cargaOk:false
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

function cargarFondo(){
  fondo.cargaOK =true;
  dibujar();

}

function cargarVaca(){
  vaca.cargaOK =true;
  dibujar();
}

function cargarCerdo(){
    cerdo.cargaOk = true;
    dibujar();

  }

function cargarPollo(){
  pollo.cargaOK = true;
  dibujar();

}

function dibujar ()
{

  if (fondo.cargaOK) {

  papel.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargaOK) {
    var cantidad = aleatorio (0, 10);
    console.log(cantidad);
    for (var i = 0; i <cantidad; i++)
    {

      var x = aleatorio(0, 220);
      var y = aleatorio(0, 220);
      papel.drawImage(vaca.imagen, x, y);

    }
    for (var i = 0; i < cantidad; i++) {
      var x = aleatorio(220, 420);
      var y = aleatorio(220, 420);
      papel.drawImage(cerdo.imagen, x, y);

    }

    for (var i = 0; i < cantidad; i++)
    {
      var x = aleatorio(1, 420);
      var y = aleatorio(1, 420);
      papel.drawImage(pollo.imagen, x, y);
    }


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
