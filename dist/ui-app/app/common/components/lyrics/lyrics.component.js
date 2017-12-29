'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  template: require('./lyrics.html'),
  bindings: {
    lyrics: '<'
  },
  controller: function controller() {
    this.$onChanges = function (changes) {
      this.lyrics = changes.lyrics.currentValue;
    };
  }
};
//# sourceMappingURL=lyrics.component.js.map