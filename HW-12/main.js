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

const nextButton = document.getElementById('next');
nextButton.addEventListener('click', () => {
    window.location.href = "planets.html";
})

const translateButton = document.getElementById('translate')
translateButton.addEventListener('click', () => {
    const change = Array.from(document.getElementsByClassName('character-info'));
    change.forEach(part => {
    part.innerHTML.replaceAll('Name:', 'Whrascwo');  
    })
    
    return;
})

function clean() {
    const oldInfo = document.getElementById('characters');
    if (oldInfo !== null) {
    oldInfo.remove(); 
    }
}



function getCharacters(episode) {
document.body.insertAdjacentHTML('beforeend', '<div id="characters"></div>');
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
                Name: ${name}<br> Date of birth: ${birth} <br> Gender: ${gender} </div>`)
          })
      })    
  })
}


// function getWookie() {
//     axios.get(`https://swapi.dev/api/people/7/?format=wookiee `)
//       .then(res => {
//           const character = res.data;
//           console.log(character);
//       })
//     }

// getWookie() 

// function getmail() {
//     axios.get(`https://swapi.dev/api/people/22/?format=wookiee `)
//       .then(res => {
//           const character = res.data;
//           console.log(character);
//       })
//     }

// getmail() 

// function getUsual() {
//     axios.get(`https://swapi.dev/api/people/7 `)
//       .then(res => {
//           const character = res.data;
//           console.log(character);
//       })
//     }

// getUsual() 

// function toWookie(episode) {
//     axios.get(`https://swapi.dev/api/films/${episode}`)
//       .then(res => {
//           const characters = res.data.characters;
//           console.log(characters)
//           characters.forEach(link => {
//             axios.get(`${link}?format=wookiee`)
//               .then(people => {
//                   const name = people.data.whrascwo;
//                   const birth = people.data.rhahrcaoac_roworarc;
//                   const id = parseInt((people.data.acooscwoohoorcanwa).replace(/\D+/g,""));
//                   console.log(people.data);
//                   let gender = people.data.corahwh_oaooanoorc;
//                     if (gender == 'wwraahrc') {
//                       gender  = `<img src="icons/Male-icon.png" class="gendericon">`
//                   } else if (gender == 'wwraahrc') {
//                     gender = `<img src="icons/Female-icon.png" class="gendericon">`
//                   } else (gender = `<img src="icons/question.png" class="gendericon">`);
//                   document.body.insertAdjacentHTML('beforeend', `<div class="character-info">
//                     <img src="photos/photo_${id}.jpg" class="photo"><br>
//                     Whrascwo: ${name}<br> Rhahrcaoac roworarc: ${birth} <br> Corahwhoaooanoorc: ${gender} </div>`)
//               })
//           })    
//       })
//     }