function validaArray(array, num){ // cria função
try{
    if (!array && !num) throw new ReferenceError("Envia os parametros !"); 
    // criando condição com mensagem de erro.

    if(typeof array !== "object") throw new TypeError ("Array precisa ser do tipo object !");
    // cria condição caso não seja object.

    if(typeof num !== "number") throw new TypeError("Num precisa ser do tipo number !");
    // cria condição caso não seja do tipo number.

    if(array.length !== num) throw new RangeError("Tamanho invalido !");
    // cria condição caso não atinga o tamanho.
}
catch(e){
    if(e instanceof ReferenceError){
        console.log("Este erro é um ReferenceError !");
        console.log(e.message);

    } else if (e instanceof TypeError) {
        console.log ("Este erro é um TypeError !");
        console.log(e.message);

    } else if (e instanceof RangeError) {
        console.log("Este erro é um RangerError !");
        console.log(e.message);
    } else {
        console.log("Tipo de erro não esperado:" + e);
    }
  }
}

console.log(validaArray());