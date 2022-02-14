const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const randomBtn = document.getElementById('change-random'); // lnkando botao
const randIMG = document.getElementById('rand'); // linkando img 

const getRandom = async () => {
    try{
    const data = await fetch(BASE_URL);
    const json = await data.json();

    return json.webpurl;
    } catch(e) {
        console.log(e.message);
    }
};

const randIMG = async () => {
    const randIMG = document.getElementById('rand');
  randIMG.src = await getRandom();
}

randomBtn.addEventListener('click', randIMG);

randIMG();
