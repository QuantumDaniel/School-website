document.addEventListener('DOMContentLoaded', () => {

  const videoItems = document.querySelectorAll('.video-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxVideo = document.getElementById('lightbox-video');
  const closeBtn = document.querySelector('.close-btn');

  // Open lightbox when a video card is clicked
  videoItems.forEach(item => {
    item.addEventListener('click', () => {
      const hiddenVideo = item.querySelector('video[data-src]');
      const src = hiddenVideo.dataset.src;

      if (!src) return;

      lightbox.style.display = 'flex';
      lightboxVideo.src = src;
      lightboxVideo.play();
    });
  });

  // Close lightbox
  function closeLightbox() {
    lightbox.style.display = 'none';
    lightboxVideo.pause();
    lightboxVideo.src = '';
  }

  closeBtn.addEventListener('click', closeLightbox);

  // Close when clicking outside video
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

});
