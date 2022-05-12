function fibonacci(){
    let fib0 =0;
    let fib1 = 1;
  for(i= 1 ; i < 20 ; i++){
    fib0+=1;
    resultado = fib0;
    fib0 = fib1;
    fib1 = fib1 + resultado;
    document.write(resultado + "<br/>");
  }
}

fibonacci();
