// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Heyy ", time: 3 },
  { text: "Aquii  ", time: 5 },
  { text: "Holaaaaaaaaaaaaaaaaaa ", time: 7 },
  { text: "No son reales ", time: 9 },
  { text: "Pero almenos no se marchitan:) ", time: 12 },
  { text: "Licencia Del Essalud ", time: 15 },
  { text: "  ", time: 18 },
  { text: " Vas a caer", time: 20 },
  { text: "Cambia", time: 22 },
  { text: "Deja de traumar", time: 24 },
  { text: " A las peronas", time: 26 },
  { text: "Sino ", time: 28 },
  { text: "Essalud ", time: 30 },
  { text: "Ardera ", time: 32 },
  { text: "Licencia Del Essalud ", time: 34 },
  { text: "", time: 36 },
  { text: "Vas a caer", time: 38 },
  { text: "Cambia", time: 40 },
  { text: "Deja de traumar", time: 42 },
  { text: "A las peronas", time: 44 },
  { text: "Sino", time: 46 },
  { text: "Essalud", time: 48 },
  { text: "Ardera ", time: 50 },
  { text: "", time: 148 },
  { text: "", time: 153 },
  { text: "", time: 158 },
  { text: "", time: 164 },
  { text: "", time: 169 },
  { text: "", time: 176 },
  { text: "", time: 183 },
  { text: "", time: 188 },
  { text: "", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);