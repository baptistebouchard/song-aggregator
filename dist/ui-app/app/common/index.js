'use strict';

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _angularjs = require('@uirouter/angularjs');

var _angularjs2 = _interopRequireDefault(_angularjs);

var _angularAnimate = require('angular-animate');

var _angularAnimate2 = _interopRequireDefault(_angularAnimate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_angular2.default.module('song-aggregator.common', [_angularjs2.default, _angularAnimate2.default]);

require('./components');
require('./clients');
require('./services');
require('./helpers');
//# sourceMappingURL=index.js.map