module.exports = {
  theme: {
    extend: {
      backgroundImage: theme => ({
        'sky-pattern': "url('/svg/sky.svg')",
        'ground-pattern': "url('/svg/ground.svg')",
      }),

      colors: {
        'kubelt-purple': '#210433',
        'kubelt-yellow': '#F3B456',
        'kubelt-blue' : '#2555F4',
        'kubelt-light-purple' : "#626AE9",
        'kubelt-mustard' : "#BE7B55",

      },
    },

    variants: {
      extend: {},
    },

    plugins: [],
    purge: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  }
};
