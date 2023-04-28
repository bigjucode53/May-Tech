var carousel = document.getElementById('carousel');
var images = carousel.getElementsByClassName('img-fluid');
var currentIndex = 0;
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');

function showImage(index) {
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }
  images[index].style.display = 'block';
}

prevBtn.addEventListener('click', function () {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextBtn.addEventListener('click', function () {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

// Afficher la première image
showImage(currentIndex);