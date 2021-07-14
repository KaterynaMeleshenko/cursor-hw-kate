function getPlanets() {
    axios.get(`https://swapi.dev/api/planets/`)
      .then(res => {
        const planets = res.data.results;
          planets.forEach(planet => {
      document.body.insertAdjacentHTML('beforeend', `<div class="planet-info">
                ${planet.name}</div>`)
      console.log(planet.name);
          })
      });
};

getPlanets()


