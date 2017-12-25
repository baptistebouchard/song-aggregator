'use strict';

import songController from './song.controller';

songController.$inject = ['$scope', '$timeout'];

export default {
  template: require('./song.html'),
  controller: songController,
}