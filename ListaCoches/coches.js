function lista(){
  let listaAuto = [];
  numList = parseInt(prompt ("Introduce el tamaño de la lista que quieres generar: "));

  for(i = 0; i < numList ; i++){

    marca = prompt("Introduce la marca del coche : ");
    modelo = prompt("Introduce el modelo del coche: ");
    annio = prompt("Introduce el annio del coche: ");
    listaAuto.push({marca: marca,modelo:modelo,annio:annio});

  }

  console.log(listaAuto);
}

lista();
