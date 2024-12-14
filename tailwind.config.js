module.exports = {
    content: ['./index.html', './js/**/*.js'], // Specify files to scan for Tailwind classes
    theme: {
      extend: {
        colors: {
          'custom-green': '#4CAF50',
          'custom-blue': '#2196F3',
          'custom-red': '#F44336',
        },
      },
    },
    plugins: [],
  };
  