import { gsap } from 'gsap'

export const hideNav = (element) => {
  gsap.to(element, {
    duration: 0.3,
    opacity: 0,
    display: 'none',
    ease: 'power2.out'
  })
}
