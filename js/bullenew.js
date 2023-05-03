var bulle10 = document.getElementById('bulle10');
var bulle3 = document.getElementById('bulle11');
// var bulle5 = document.getElementById('bulle5');
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

observer.observe(bulle10);
observer.observe(bulle11);
// observer.observe(bulle5);