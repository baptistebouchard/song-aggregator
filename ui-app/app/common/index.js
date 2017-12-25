'use strict';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngAnimate from 'angular-animate';

angular.module('song-aggregator.common', [
  uiRouter,
  ngAnimate
]);

require('./components');
require('./clients');
require('./services');
require('./helpers');
