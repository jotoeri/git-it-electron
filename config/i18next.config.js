/** Configuration Settings for i18next */

// Available appLanguages
const appLanguages = ['en-US', 'de-DE']

const i18nextConfig = {
  debug: true,
  lng: 'de-DE',
  initImmediate: false,
  backend: {
    // path where resources get loaded from
    loadPath: './i18n/{{lng}}.json',
    // jsonIndent to use when storing json files
    jsonIndent: 2
  },
  saveMissing: false,
  whitelist: appLanguages,
  fallbackLng: 'en-US',
  keySeparator: false,
  nsSeparator: false,
}

exports.i18nextConfig = i18nextConfig