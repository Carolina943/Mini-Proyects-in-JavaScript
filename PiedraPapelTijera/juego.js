
function generateRandomInt(min,max){
    return Math.floor((Math.random() * (max-min)) +min);
}
let computadora = parseInt(generateRandomInt(1,4));

let usuario = prompt("Que eliges? (Piedra, Papel o Tijeras)?");

function juego(){

  if(usuario=="Papel" && computadora=="1"){
    alert("Computadora Piedra tu ganas");
  }
  if(usuario=="Papel" && computadora=="2"){
    alert("Computadora Papel, quedaron empate");
  }
  if(usuario=="Papel" && computadora=="3"){
    alert("Computadora Tijeras, tu pierdes");
  }
  if(usuario=="Piedra" && computadora=="1"){
    alert("Computadora Piedra, quedaron empate");
  }
  if(usuario=="Piedra" && computadora=="2"){
    alert("Computadora Papel, tu pierdes");
  }
  if(usuario=="Piedra" && computadora=="3"){
    alert("Computadora Tijeras, tu ganas");
  }
  if(usuario=="Tijeras" && computadora=="1"){
    alert("Computadora Piedra, tu pierdes");
  }
  if(usuario=="Tijeras" && computadora=="2"){
      alert("Computadora Papel, tu ganas");
  }
  if(usuario=="Tijeras" && computadora=="3"){
    alert("computadora Tijeras, quedaron empate");
  }
}

juego();
