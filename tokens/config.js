
const StyleDictionary = require('style-dictionary');

StyleDictionary.registerFormat({
  name: 'css/variables',
  formatter: function (dictionary, options) {
    return dictionary.allProperties.map(function (prop) {
      return `--${prop.name}: ${prop.value};`;
    }).join('\n');
  }
});

module.exports = {
  source: [
    'tokens.json',
  ],
  platforms: {
    scss: {
      transformGroup: 'css',
      buildPath: '../src/styles/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
        },
      ],
    },
  },
  transformGroups: {
    scss: ['attribute/cti', 'name/cti/camel', 'scss'],
  },
};