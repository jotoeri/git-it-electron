const i18next = require('i18next')
const i18nextBackend = require('i18next-fs-backend')

const { i18nextConfig } = require('../config/i18next.config.js')

// Store and Init i18next
function i18nInit () {
  global.i18n = i18next
  global.i18n
    .use(i18nextBackend)
    .init(i18nextConfig)
}

exports.i18nInit = i18nInit