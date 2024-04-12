import { gsap } from 'gsap'

document.addEventListener('DOMContentLoaded', () => {
  const cards = Array.from(document.querySelector('#cards-grid').children)
  cards.forEach((card) => {
    card.classList.add('opacity-0', 'translate-y-10')
  })

  let loadAnimation = gsap.timeline()

  loadAnimation.from('#topNav', {
    delay: 0.5,
    duration: 0.8,
    opacity: 0,
    y: '-100%',
    ease: 'power2.out'
  })

  loadAnimation.to(
    cards,
    {
      duration: 0.6,
      opacity: 1,
      y: '0',
      stagger: 0.2,
      ease: 'power2.out'
    },
    '-=0.3'
  )
})
