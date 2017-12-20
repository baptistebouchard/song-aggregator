'use strict';
const configFile = require('./config.json');

module.exports = function createConfig(env) {
  return {
    env,
    config: configFile[env],
  };
};