
// animation home texte
var words = [
  "Gérez votre entreprise en 3 clics!",
  "Application sur-mesure! ",
  "Où prête à l'emploi!",
];
var part = "";
var i = 0;
var offset = 0;
var len = words.length;
var forwards = true;
var skip_count = 0;
var skip_delay = 5;
var speed = 100;

function wordflick() {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    document.querySelector(".word").textContent = part;
  }, speed);
}

window.addEventListener("DOMContentLoaded", function () {
  wordflick();
});


// animation chiffre2

function animateCounter2(target, duration, element) {
  var startValue = 0;
  var startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = timestamp - startTime;

    var currentValue = Math.floor((progress / duration) * target);
    element.textContent = currentValue;

    if (progress < duration) {
      requestAnimationFrame(step);
    } else {
      element.textContent = target;
    }
  }

  requestAnimationFrame(step);
}

function startCounterAnimations() {
  var counterElements = document.querySelectorAll('.counter-sec2');

  function checkScroll() {
    counterElements.forEach(function(counterElement) {
      var counterPosition = counterElement.getBoundingClientRect();
      var numElement = counterElement.querySelector('.num2');

      if (
        counterPosition.top <= window.innerHeight &&
        counterPosition.bottom >= 0 &&
        !counterElement.classList.contains('counted')
      ) {
        var targetValue = parseInt(numElement.textContent);
        var duration = 1200;
        animateCounter2(targetValue, duration, numElement);
        counterElement.classList.add('counted');
      } else if (counterPosition.top > window.innerHeight || counterPosition.bottom < 0) {
        counterElement.classList.remove('counted');
      }
    });
  }

  function handleScroll() {
    requestAnimationFrame(checkScroll);
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();
}

document.addEventListener('DOMContentLoaded', startCounterAnimations);


