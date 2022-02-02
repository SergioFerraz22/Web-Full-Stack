<<<<<<< HEAD
const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5]; // criando array


function valoresUnicos(array){ // criando função para receber o array
    const mySet = new Set(array)


    return [...mySet]; // aplicando spread "..." para que os elementos unicos do array sejam exibidos 
}

=======
const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5]; // criando array


function valoresUnicos(array){ // criando função para receber o array
    const mySet = new Set(array)


    return [...mySet]; // aplicando spread "..." para que os elementos unicos do array sejam exibidos 
}

>>>>>>> 2fe8f807a0b1419588eaa9690d17921ddf664da9
console.log(valoresUnicos(meuArray));