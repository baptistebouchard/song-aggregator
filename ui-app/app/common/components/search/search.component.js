'use strict';

import searchController from './search.controller';

export default {
  template: require('./search.html'),
  controller: searchController,
  bindings: {
    song: '<',
    onSongChange: '&'
  }
}