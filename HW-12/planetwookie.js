function getPlanets() {
  document.body.insertAdjacentHTML('beforeend', `<div id="info"></div>`);
  
  const mainBlock = document.getElementById('info');
    for (let i = 1; i < 11; i++) {
      axios.get(`https://swapi.dev/api/planets/${i}?format=wookiee`)
        .then(res => {
          const planet = res.data.whrascwo;
          
          mainBlock.insertAdjacentHTML('beforeend', `<div class="planet-info">
            ${planet}</div>`)
        })
    }
};

getPlanets()

function clean() {
  const oldInfo = document.getElementById('info');
  
  if (oldInfo !== null) {
    oldInfo.remove(); 
  }
}

const nextButton = document.getElementById('next');
  let planets = 10
  
  nextButton.addEventListener('click', () => {
    clean();
    planets = planets + 10;
    
    if (planets > 50) {
      planets = 50;
    }

    return getNextPlanets(planets); 
  });

function getNextPlanets(planets) {
  clean();
  document.body.insertAdjacentHTML('beforeend', `<div id="info"></div>`);
  
  const mainBlock = document.getElementById('info');
    for (let i = planets; i < (planets + 10); i++) {
      axios.get(`https://swapi.dev/api/planets/${i}?format=wookiee`)
        .then(res => {
          const planet = res.data.whrascwo;
          
          mainBlock.insertAdjacentHTML('beforeend', `<div class="planet-info">
            ${planet}</div>`)
        })
    }
};