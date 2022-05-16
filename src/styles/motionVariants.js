export const opacityVariant = {
  initial: { opacity: 0 },
  heroAnimate: {
    opacity: 1,
    transition: { duration: 2 }
  },
  sectionsWhileInView: {
    opacity: 1,
    transition: { duration: 1 }
  },
  projectsWhileInView: (index) => ({
    opacity: 1,
    transition: {
      delay: index / 3,
      duration: 1
    }
  }),
  skillsWhileInView: (index) => ({
    opacity: 1,
    transition: {
      delay: index / 10,
      duration: 1
    }
  })
}
