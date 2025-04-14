const mixins = require('./src/mixins/mixins');

module.exports = {
  plugins: {
    'postcss-mixins': { mixins },
    'postcss-preset-env': {
      autoprefixer: { grid: true },
      stage: 3,
    },
    'autoprefixer': {},
  },
};