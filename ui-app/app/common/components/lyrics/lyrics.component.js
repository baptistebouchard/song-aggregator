'use strict';

export default {
  template: require('./lyrics.html'),
  bindings: {
    lyrics: '<'
  },
  controller: function() {
    this.$onChanges = function (changes) {
      this.lyrics = changes.lyrics.currentValue;
    };
  }
}