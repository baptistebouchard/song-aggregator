'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lyricsFilter;
function lyricsFilter(input) {
  if (input) {
    var r = /\W+(?=[A-Z][a-z])/g;
    return input.replace(r, '$&\n');
  }
}
//# sourceMappingURL=lyrics.filter.js.map