export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 16,           // 1rem = 16px baseline
      propList: ['*'],         // convert ALL properties
      exclude: /node_modules/i,
      replace: true,
      mediaQuery: false,       // don't convert breakpoints themselves
      minPixelValue: 2,        // keep 1px hairlines as px
    },
  },
};
