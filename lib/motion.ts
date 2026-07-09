export type AnimationTokens = {
  duration: {
    fast: number;
    base: number;
    slow: number;
    slower: number;
  };
  ease: {
    out: number[];
    inOut: number[];
    spring: { type: "spring"; stiffness: number; damping: number };
  };
  stagger: {
    fast: number;
    base: number;
    slow: number;
  };
};

export const motionTokens: AnimationTokens = {
  duration: { fast: 0.25, base: 0.5, slow: 0.8, slower: 1.2 },
  ease: {
    out: [0.22, 1, 0.36, 1],
    inOut: [0.83, 0, 0.17, 1],
    spring: { type: "spring", stiffness: 120, damping: 20 },
  },
  stagger: { fast: 0.04, base: 0.08, slow: 0.16 },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.base,
      ease: motionTokens.ease.out,
      delay,
    },
  }),
};

export const stagger = (delayChildren = 0, staggerChildren = motionTokens.stagger.base) => ({
  hidden: {},
  show: {
    transition: { delayChildren, staggerChildren },
  },
});
