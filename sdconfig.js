module.exports = {
  source: ['data/output.json'],
  platforms: {
    scss: {
      transformGroup: 'css',
      buildPath: 'styles/_generated/',
      files: [
        {
          destination: '_variables.scss',
          format: 'scss/variables',
          options: {
            outputReferences: true
          }
        }
      ]
    },
    css: {
      transformGroup: 'css',
      buildPath: 'styles/_generated/',
      files: [
        {
          destination: '_css-variables.css',
          format: 'css/variables',
          options: {
            outputReferences: true
          }
        }
      ]
    }
  }
}