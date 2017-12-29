'use strict';

import songController from './song.controller';

export default {
  template: require('./song.html'),
  controller: songController,
  bindings: {
    song: '<'
  }
}