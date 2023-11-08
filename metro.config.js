// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, { 
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
});

config.resolver.assetExts.push('db');
// add support to db files for sqlite

module.exports = config;
