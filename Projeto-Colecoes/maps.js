function getAdmins(map) { // criando função para receber o map
    let admins = [];
    for([key, value]of map) { // aplicando valor para key(nome) e value(adm ou user)
     if(value == 'Admin'){ // aplicando condição 
         admins.push(key); // exibir resultado caso condição seja atendida 
 }
 }
 return admins; // setando o que será mostrado em tela 
}

const usuarios = new Map(); // criando o map 


usuarios.set('Luiz', 'Admin');
usuarios.set('Junior', 'Admin');
usuarios.set('Helio', 'User');
usuarios.set('Luan', 'User');
usuarios.set('Matheus', 'Admin');

console.log(getAdmins(usuarios));