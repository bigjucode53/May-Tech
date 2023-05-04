var bulle20 = document.getElementById('bulle20');


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

observer.observe(bulle20);

