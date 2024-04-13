import { gsap } from 'gsap'

document.addEventListener('astro:page-load', () => {
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

  const calculateRotation = (e, parent) => {
    const cardRect = parent.getBoundingClientRect()
    console.log(cardRect.width, cardRect.height)

    const centerX = cardRect.left + cardRect.width / 2
    const centerY = cardRect.top + cardRect.height / 2

    const mouseX = e.clientX
    const mouseY = e.clientY

    const offsetX = ((mouseX - centerX) / centerX) * 3
    let offsetY = ((mouseY - centerY) / centerY) * 5
    if (cardRect.height > 600) {
      offsetY = ((mouseY - centerY) / centerY) * 1.5
    }

    gsap.to(parent, {
      rotateX: offsetY,
      rotateY: -offsetX,
      ease: 'linear'
    })
  }

  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      calculateRotation(e, card)
    })
  })

  cards.forEach((card) => {
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        duration: 0.5,
        rotateX: 0,
        rotateY: 0,
        ease: 'power2.out'
      })
    })
  })
})
