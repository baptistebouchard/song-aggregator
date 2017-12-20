'use strict';

const _ = require('lodash');
const express = require('express');

const SUPPORTED_METHODS = [ 'get', 'head', 'post', 'put', 'delete', 'trace', 'options', 'connect', 'patch' ];

function createRouter(routeDefinitions) {
  let router = express.Router();
  _.forOwn(routeDefinitions, (routeDefinition, routePath) => {
    importPath(router, routePath, routeDefinitions[routePath]);
  });
  return router;
}

function importPath(router, routePath, routeDefinition) {
  _.forOwn(routeDefinition, (route, method) => {
    if (_.includes(SUPPORTED_METHODS, method.toLowerCase())) {
      let routerArguments = [];
      routerArguments.push(routePath);

      if (_.isArray(route)) {
        routerArguments = routerArguments.concat(route);
      } else {
        routerArguments.push(route);
      }
      router[method].apply(router, routerArguments);
    } else {
      throw new Error(`Method not supported: ${method}`);
    }
  });
}

module.exports = createRouter;