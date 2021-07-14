function getPlanets() {
  document.body.insertAdjacentHTML('beforeend', `<div id="info"></div>`);
  const mainBlock = document.getElementById('info');

  axios.get(`https://swapi.dev/api/planets/?page=1`)
    .then(res => {
      const planets = res.data.results;
      
      planets.forEach(planet => {
        mainBlock.insertAdjacentHTML('beforeend', `<div class="planet-info">
        ${planet.name}</div>`)
      })
    });
};

getPlanets()

function clean() {
    const oldInfo = document.getElementById('info');
    
    if (oldInfo !== null) {
    oldInfo.remove(); 
    }
}

const nextButton = document.getElementById('next');
let page = 1

nextButton.addEventListener('click', () => {
  clean();
  page = page + 1;
    
  if (page > 6) {
        page = 6;
  }
  
  return getNextPlanets(page); 
});

function getNextPlanets(page) {
  clean()
  document.body.insertAdjacentHTML('beforeend', `<div id="info"></div>`);
  
  const mainBlock = document.getElementById('info');
  
  axios.get(`https://swapi.dev/api/planets/?page=${page}`)
    .then(res => {
      const planets = res.data.results;
      
      planets.forEach(planet => {
        mainBlock.insertAdjacentHTML('beforeend', `<div class="planet-info">
        ${planet.name}</div>`)
      })
    });
};

