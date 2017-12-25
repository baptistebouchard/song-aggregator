'use strict';

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _song = require('./song.route');

var _song2 = _interopRequireDefault(_song);

var _song3 = require('./song.component');

var _song4 = _interopRequireDefault(_song3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('../../common/');

_angular2.default.module('song-aggregator.song', ['song-aggregator.common']).component('song', _song4.default).run(_song2.default);
//# sourceMappingURL=index.js.map