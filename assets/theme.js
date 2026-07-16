document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('[data-header]');
  var menuToggle = document.querySelector('[data-menu-toggle]');

  if (header && menuToggle) {
    menuToggle.addEventListener('click', function () {
      var isOpen = header.classList.toggle('is-nav-open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  var mainImage = document.getElementById('ProductMainImage');
  var thumbnails = document.querySelectorAll('[data-product-thumbnail]');

  thumbnails.forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      if (mainImage) {
        mainImage.src = thumb.getAttribute('data-image');
      }
      thumbnails.forEach(function (t) { t.classList.remove('is-active'); });
      thumb.classList.add('is-active');
    });
  });
});
