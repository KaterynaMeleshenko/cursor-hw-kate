const music = ['m', 'u', 's', 'i', 'c'];

music.forEach(letter => {
  const myMusic = document.getElementById(letter+'Music');

  document.addEventListener('keydown', function (e) {
    if (e.key === letter) {
      ( document.getElementById(letter) ).classList.add("active");
      myMusic.play();
     } else {
        ( document.getElementById(letter) ).classList.remove("active");
     }
  });
})


