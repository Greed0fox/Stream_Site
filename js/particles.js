/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */
particlesJS("particles-js",
    
    {
    particles: {
      number: {
        value: 350,
        density: { enable: true, value_area: 236.74802907265777 }
      },
      color: {
        value: [
          "#a22039", "#a22039", "#a22039", "#a22039", "#a22039",
          "#67144f", "#67144f", "#67144f",
          "#3b2975", "#3b2975",
          "#ca9c6d" 
        ]
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000" 
        }
      },
      opacity: {
        value: 0.8,
        random: true,
        anim: { 
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 2.5,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.5,
          sync: false
        }
      },
      line_linked: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
            enable: false,
        },
        onclick: {
            enable: false,
        },
        resize: true
      }
    },
    retina_detect: true
