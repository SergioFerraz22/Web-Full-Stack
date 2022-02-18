
function changeMode() { // cria função principal
	changeClasses();
	changeText();
}

function changeClasses() { 
	button.classList.toggle(darkModeClass);
	h1.classList.toggle(darkModeClass);
	body.classList.toggle(darkModeClass);
	footer.classList.toggle(darkModeClass);
    // aplicando toogle em cada elemento para realizar a inversão de dark para light 
}

function changeText() { // criando função para alterar o texto
	const lightMode = 'Light Mode';
	const darkMode = 'Dark Mode';
    // criando constante e aplicando texto para alteração

	if (body.classList.contains(darkModeClass)) {
		button.innerHTML = lightMode;
		h1.innerHTML = darkMode + ' ON';
        // aplicando alterações caso alguma das condições sejam atendidas.
        return;
	}
	button.innerHTML = darkMode;
	h1.innerHTML = lightMode + ' ON';
    // aplicando alterações caso não seja atendido.
}

const darkModeClass = 'dark-mode';
//criando constante para linkar a troca de darkmode
const button = document.getElementById('mode-selector');
// linkando botão
const h1 = document.getElementById('page-title');
//linkando h1 
const body = document.getElementsByTagName('body')[0];
// linkando corpo da pagina e selecionando seu indice
const footer = document.getElementsByTagName('footer')[0];
// linkando rodapé da pagina e selecionando seu indice 
button.addEventListener('click', changeMode);
// adicionando evento ao clicar no botão
