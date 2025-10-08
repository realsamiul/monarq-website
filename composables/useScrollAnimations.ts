export const useScrollAnimations = () => {
  const initParallax = () => {
    if (process.client) {
      const { $gsap, $ScrollTrigger } = useNuxtApp()
      
      // Parallax images
      $gsap.utils.toArray('.background .image').forEach((image: any) => {
        $gsap.to(image, {
          yPercent: 30,
          ease: 'none',
          scrollTrigger: {
            trigger: image.closest('section') || image.closest('header'),
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        })
      })

      // Parallax for project items
      $gsap.utils.toArray('.project').forEach((project: any, index: number) => {
        const isEven = index % 2 === 0
        $gsap.to(project, {
          y: isEven ? -150 : 150,
          ease: 'none',
          scrollTrigger: {
            trigger: project,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        })
      })
    }
  }

  const initTextReveal = () => {
    if (process.client) {
      const { $gsap, $ScrollTrigger } = useNuxtApp()
      
      // Title line animations
      $gsap.utils.toArray('.title-line').forEach((line: any) => {
        $gsap.from(line, {
          yPercent: 100,
          opacity: 0,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: line,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        })
      })

      // Text mask reveals
      $gsap.utils.toArray('.text-line').forEach((line: any) => {
        $gsap.from(line, {
          yPercent: 100,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: line,
            start: 'top 95%',
            toggleActions: 'play none none none'
          }
        })
      })

      // Info line animations (project cards)
      $gsap.utils.toArray('.info-line').forEach((line: any) => {
        $gsap.from(line, {
          yPercent: -100,
          rotation: -7,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: line,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        })
      })
    }
  }

  const initFadeIn = () => {
    if (process.client) {
      const { $gsap, $ScrollTrigger } = useNuxtApp()
      
      // Fade in sections
      $gsap.utils.toArray('section').forEach((section: any) => {
        $gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        })
      })

      // Fade in images
      $gsap.utils.toArray('.image').forEach((img: any) => {
        $gsap.from(img, {
          opacity: 0,
          scale: 1.1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: img,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        })
      })
    }
  }

  const initHeroAnimations = () => {
    if (process.client) {
      const { $gsap } = useNuxtApp()
      
      const tl = $gsap.timeline({ delay: 0.5 })
      
      tl.from('.hero .title-line', {
        yPercent: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power4.out'
      })
      .from('.hero .text-line', {
        yPercent: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        ease: 'power3.out'
      }, '-=0.8')
      .from('.hero .body, .hero .link', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power2.out'
      }, '-=0.5')
      .from('.hero .background .image', {
        scale: 1.2,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out'
      }, '-=1.2')
    }
  }

  return {
    initParallax,
    initTextReveal,
    initFadeIn,
    initHeroAnimations
  }
}

