const mainButton = document.getElementById('main');
mainButton.addEventListener('click', () => {
    clean();
    getCharacters(2)
});

const specificButton = document.getElementById('get');
specificButton.addEventListener('click', () => {
    const episode = document.getElementById('episode-input').value;
    clean();
    return getCharacters(episode); 
});

const showButton = document.getElementById('show');
showButton.addEventListener('click', () => {
    window.location.href = "planets.html";
})

const translateButton = document.getElementById('translate');
translateButton.addEventListener('click', () => {
    window.location.href = "indexwookie.html"; 
})

function clean() {
    const oldInfo = document.getElementById('characters');
    if (oldInfo !== null) {
    oldInfo.remove(); 
    }
}

function getCharacters(episode) {
  document.body.insertAdjacentHTML('beforeend', `<div id="characters"></div>`);
  let mainBlock = document.getElementById('characters');

  axios.get(`https://swapi.dev/api/films/${episode}`)
    .then(res => {
      const characters = res.data.characters;

      characters.forEach(link => {
        axios.get(`${link}`)
          .then(people => {
            const name =  people.data.name;
            const birth = people.data.birth_year;
            const id = parseInt((people.data.url).replace(/\D+/g,""));
            let gender = people.data.gender;
            
            if (gender == 'male') {
              gender  = `<img src="icons/Male-icon.png" class="gendericon">`
            } else if (gender == 'female') {
              gender = `<img src="icons/Female-icon.png" class="gendericon">`
            } else (gender = `<img src="icons/question.png" class="gendericon">`);
              
            mainBlock.insertAdjacentHTML('beforeend', `<div class="character-info">
              <img src="photos/photo_${id}.jpg" class="photo"><br>
              <b>Name:</b> ${name}<br> <b>Date of birth:</b> ${birth} <br> <b>Gender:</b> ${gender} </div>`)
          })
      })    
  })
}