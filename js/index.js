
// animation home texte
var words = [
  "Gérez votre entreprise en 3 clics!",
  "Application sur-mesure! ",
  "Ou prête à l'emploi!",
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


// animation de rebond et scroll

var bulle2 = document.getElementById('bulle2');
var bulle3 = document.getElementById('bulle3');
var bulle5 = document.getElementById('bulle5');
var animationInProgress = {};

var observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting && !animationInProgress[entry.target.id]) {
      entry.target.classList.add('active');
      animationInProgress[entry.target.id] = true;
    } else if (!entry.isIntersecting && animationInProgress[entry.target.id]) {
      entry.target.classList.remove('active');
      delete animationInProgress[entry.target.id];
    }
  });
}, { threshold: 0 });

observer.observe(bulle2);
observer.observe(bulle3);
observer.observe(bulle5);

