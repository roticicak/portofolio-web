export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];

export const SPRING_NAV = {
  type: "spring",
  stiffness: 380,
  damping: 32,
  mass: 0.75,
};

export const SPRING_GENTLE = {
  type: "spring",
  stiffness: 240,
  damping: 26,
};

export const pageTransitionVariants = {
  initial: (direction) => ({
    opacity: 0,
    x: direction >= 0 ? 32 : -32,
    scale: 0.985,
    filter: "blur(6px)",
  }),
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.48,
      ease: EASE_OUT_EXPO,
      when: "beforeChildren",
      staggerChildren: 0.055,
    },
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction >= 0 ? -24 : 24,
    scale: 0.985,
    filter: "blur(5px)",
    transition: {
      duration: 0.28,
      ease: [0.4, 0, 1, 1],
    },
  }),
};

export const detailViewVariants = {
  initial: {
    opacity: 0,
    y: 28,
    scale: 0.98,
    filter: "blur(6px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.46,
      ease: EASE_OUT_EXPO,
      staggerChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    y: 18,
    scale: 0.985,
    filter: "blur(5px)",
    transition: {
      duration: 0.26,
      ease: [0.4, 0, 1, 1],
    },
  },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.065,
      delayChildren: 0.04,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 18 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: EASE_OUT_EXPO,
    },
  },
};

export const mobileMenuVariants = {
  initial: { opacity: 0, backdropFilter: "blur(0px)" },
  animate: {
    opacity: 1,
    backdropFilter: "blur(24px)",
    transition: { duration: 0.3, ease: EASE_OUT_EXPO },
  },
  exit: {
    opacity: 0,
    backdropFilter: "blur(0px)",
    transition: { duration: 0.22, ease: "easeIn" },
  },
};
