import {
  hsl,
  rem,
} from 'polished';
import {
  createTheme,
} from '../lib';

const elements = Object.freeze({
  borderStyles: {
    set: ['solid'],
    default: 0,
  },
  borderWidths: {
    set: [0, 1, 2],
    default: 1,
  },
  breakpoints: {
    set: [
      rem(480),
      rem(768),
      rem(960),
    ],
    alias: {
      s: 0,
      m: 1,
      l: 2,
    },
  },
  colors: {
    white: {
      set: [
        hsl(0, 0, 1),
      ],
      default: 0,
      alias: {},
    },
    grey: {
      set: [
        hsl(0, 0, 10),
      ],
      default: 0,
      alias: {},
    },
    red: {
      set: [
        hsl(340, 1, 0.5),
      ],
    },
    blue: {
      set: [
        hsl(240, 1, 0.5),
      ],
    },
  },
  fontFamilies: {
    set: [
      `"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif`,
    ],
    default: 0,
    alias: {
      'sans-serif': 0,
    },
  },
  fontSizes: {
    set: [
      rem(0),  rem(10), rem(12),
      rem(14), rem(16), rem(18),
      rem(24), rem(32), rem(38),
    ],
    default: 4,
    alias: {
      xs: 1,
      s: 3,
      m: 4,
      l: 7,
    },
  },
  fontWeights: {
    set: [200, 400, 500, 700],
    default: 1,
    alias: {},
  },
  images: {
    set: [],
  },
  letterSpacings: {
    set: [0, 0.1, 0.2],
    default: 0,
    alias: {},
  },
  lineHeights: {
    set: [
      0,
      1,
      1.2,
      1.3,
      1.4,
      1.5,
      1.8,
      2,
    ],
    default: 3,
  },
  opacities: {
    set: [0.1, 0.5],
  },
  radii: {
    set: [0, 4, 8, 12, 20, 24],
    default: 0,
    alias: {},
  },
  sizes: {
    set: [0, 4, 8, 12, 20, 24],
  },
  spaces: {
    set: [
      rem(0), rem(2), rem(4),
      rem(8), rem(12), rem(14),
      rem(16), rem(20), rem(40),
    ],
    default: 0,
    alias: {
      xs: 2,
      s: 3,
      m: 7,
      l: 8,
    },
  },
  times: {
    set: [100, 200],
  },
  timingFunctions: {
    set: [],
  },
  zIndices: {
    set: [0, 1],
  },
});
