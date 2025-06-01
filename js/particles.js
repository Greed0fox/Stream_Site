/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */
// JS
particlesJS("particles-js", {
  particles: {
    number: {
      value: 210,
      density: { enable: true, value_area: 236.74802907265777 }
    },
    color: { value: "#a22039" }, // стартовый цвет
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 1,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
    },
    line_linked: {
      enable: false
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false },
      onclick: { enable: false },
      resize: true
    }
  },
  retina_detect: true
});

// Функция для интерполяции цвета
function interpolateColor(color1, color2, factor) {
  var result = color1.slice();
  for (var i = 0; i < 3; i++) {
    result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
  }
  return result;
}

function hexToRgb(hex) {
  var bigint = parseInt(hex.replace("#", ""), 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

function rgbToHex(rgb) {
  return (
    "#" +
    rgb
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
}

// Цвета для анимации
const colorStart = hexToRgb("#a22039");
const colorEnd = hexToRgb("#3b2975");

let factor = 0;
let increasing = true;

function animateColor() {
  factor += increasing ? 0.005 : -0.005;
  if (factor >= 1) {
    factor = 1;
    increasing = false;
  } else if (factor <= 0) {
    factor = 0;
    increasing = true;
  }

  const interpolatedColor = rgbToHex(interpolateColor(colorStart, colorEnd, factor));

  const particles = window.pJSDom[0].pJS.particles;
  particles.color.value = interpolatedColor;
  particles.color.rgb = hexToRgb(interpolatedColor);

  // Применим к каждой частице
  particles.array.forEach((p) => {
    p.color.value = interpolatedColor;
    p.color.rgb = hexToRgb(interpolatedColor);
  });

  requestAnimationFrame(animateColor);
}
animateColor();

