const mainButton = document.getElementById('main');
mainButton.addEventListener('click', () => {
  clean();
  toWookie(2)
});

const specificButton = document.getElementById('get');
specificButton.addEventListener('click', () => {
  const episode = document.getElementById('episode-input').value;
  clean();
  return toWookie(episode); 
});

const showButton = document.getElementById('show');
showButton.addEventListener('click', () => {
  window.location.href = "planetwookie.html";
})

const translateButton = document.getElementById('translate');
translateButton.addEventListener('click', () => {
  window.location.href = "index.html"; 
})

function clean() {
  const oldInfo = document.getElementById('characters');
  
  if (oldInfo !== null) {
    oldInfo.remove(); 
  }
}

function toWookie(episode) {
  document.body.insertAdjacentHTML('beforeend', '<div id="characters"></div>');
  
  let mainBlock = document.getElementById('characters');

  axios.get(`https://swapi.dev/api/films/${episode}`)
    .then(res => {
      const characters = res.data.characters;
        characters.forEach(link => {
          axios.get(`${link}?format=wookiee`)
            .then(people => {
              const name = people.data.whrascwo;
              const birth = people.data.rhahrcaoac_roworarc;
              const id = parseInt((people.data.hurcan).replace(/\D+/g,""));
              let gender = people.data.rrwowhwaworc;
               
              if (gender == 'scraanwo') {
                gender  = `<img src="icons/Male-icon.png" class="gendericon">`
              } else if (gender == 'wwwoscraanwo') {
                gender = `<img src="icons/Female-icon.png" class="gendericon">`
              } else (gender = `<img src="icons/question.png" class="gendericon">`);
                mainBlock.insertAdjacentHTML('beforeend', `<div class="character-info">
                  <img src="photos/photo_${id}.jpg" class="photo"><br>
                  Whrascwo: ${name}<br> Rhahrcaoac roworarc: ${birth} <br> Corahwhoaooanoorc: ${gender} </div>`)
            })
        })    
    })
}