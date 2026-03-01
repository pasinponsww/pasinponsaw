/**
 * @brief Animations for experience items and fade-up elements
 * @note Uses IntersectionObserver to trigger animations when elements come into view
 * @author Bex Saw 
 */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 70);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll('.exp-item, .fade-up').forEach((el) => {observer.observe(el);});
