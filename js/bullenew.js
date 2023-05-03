var bulle10 = document.getElementById('bulle10');


var animationInProgress = {};

var observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting && !animationInProgress[entry.target.id]) {
      entry.target.classList.add('active2');
      animationInProgress[entry.target.id] = true;
    } else if (!entry.isIntersecting && animationInProgress[entry.target.id]) {
      entry.target.classList.remove('active2');
      delete animationInProgress[entry.target.id];
    }
  });
}, { threshold: 0 });

observer.observe(bulle10);



var bulle11 = document.getElementById('bulle11');

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

observer.observe(bulle11);
