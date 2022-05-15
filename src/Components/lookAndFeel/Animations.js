export const titleAnim = {
  hidden: {
   x: -600,
   opacity:0.3
    },
  show: {
    x: 0,
    opacity:1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    x: -600,
    transition: {
      duration: 0.6,
    },
  },
};

export const fadeIn={
  hidden:{opacity:0},
  show:{
    opacity:1,
    transition:{
      when:"beforeChildren",
      duration:0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when:"afterChildren",
      duration: 0.3,
    },
  },
};