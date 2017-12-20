'use strict';

module.exports = function createClients(config) {
  const ovhClient = require('./ovh.client');
  return {
    ovhClient: ovhClient(config),
  };
};