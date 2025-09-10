// Tiny interactive tilt on the portrait (no 3D libs, just CSS transforms)
(function () {
  const card = document.querySelector('.portrait');
  if (!card) return;
 
  const maxX = 8; // degrees
  const maxY = 8;

  function tilt(e) {
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;  // 0..1
    const py = (e.clientY - r.top) / r.height;  // 0..1
    const rotY = (0.5 - px) * (maxY * 2);
    const rotX = (py - 0.5) * (maxX * 2);
    card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
  }
  function reset() {
    card.style.transform = 'translateY(-4px)';
  }
  card.addEventListener('mousemove', tilt);
  card.addEventListener('mouseleave', reset);
})();

