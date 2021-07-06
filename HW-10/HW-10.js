const music = ['m', 'u', 's', 'i', 'c'];

function activateSound(letter) {
  deactivateAll();
  document.getElementById(letter).classList.add("active");
  const myMusic = document.getElementById(letter+'Music');
  myMusic.play();
}

function deactivateAll() {
  music.forEach(letter => {
    document.getElementById(letter).classList.remove("active");
    const myMusic = document.getElementById(letter+'Music');
    myMusic.pause();
    myMusic.currentTime = 0;
  })
} 

function letShowGoOn() {
  music.forEach(letter => {
    
    document.addEventListener('keydown', function (e) {
      if (e.key === letter) {
      activateSound(letter);
      } else {
       document.getElementById(letter).classList.remove("active");
      }
    });
  
    document.getElementById(letter).onclick = function() {
     activateSound(letter);
    }
  })
}

letShowGoOn();

