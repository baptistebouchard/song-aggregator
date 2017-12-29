'use strict';

export default {
  template: require('./tab.html'),
  bindings: {
    tab: '<'
  },
  controller: function() {
    this.$onChanges = function (changes) {
      this.tab = changes.tab.currentValue;
    };
  }
}