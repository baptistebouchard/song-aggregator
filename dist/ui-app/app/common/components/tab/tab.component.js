'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  template: require('./tab.html'),
  bindings: {
    tab: '<'
  },
  controller: function controller() {
    this.$onChanges = function (changes) {
      this.tab = changes.tab.currentValue;
    };
  }
};
//# sourceMappingURL=tab.component.js.map