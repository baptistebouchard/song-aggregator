'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _song = require('./song.controller');

var _song2 = _interopRequireDefault(_song);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  template: require('./song.html'),
  controller: _song2.default,
  bindings: {
    song: '<'
  }
};
//# sourceMappingURL=song.component.js.map