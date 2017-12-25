'use strict';
// dependencies

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

require('bootstrap');

require('./sass/main.scss');

require('./common');

require('./modules/song');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// app module declaration
_angular2.default.module('song-aggregator', ['song-aggregator.song']);

// modules


// sass
//# sourceMappingURL=index.js.map