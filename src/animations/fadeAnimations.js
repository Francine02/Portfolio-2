import gsap from 'gsap';

export function fadeAnimations() {
  gsap.utils.toArray('.fade').forEach((el) => {
    gsap.from(
      el,
      {
        opacity: 0,
        y: 5,
        duration: 0.5,
        ease: 'power1.out',
        stagger: 0.2,
      },
      '+=0.1'
    );
  });

  gsap.utils.toArray('.fade-image').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      scale: 0.96,
      duration: 1,
      ease: 'power1.out',
      stagger: 0.2,
    });
  });

  gsap.utils.toArray('.fade-stagger').forEach((container) => {
    gsap.from(container.children, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.3,
    });
  });

  gsap.utils.toArray('.fade-left').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      x: 50,
      duration: 0.8,
      ease: 'power3.out',
    });
  });

  gsap.utils.toArray('.fade-right').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: 'power3.out',
    });
  });
}
