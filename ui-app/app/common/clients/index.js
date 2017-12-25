'use strict';

import songClient from './song.client';

angular.module('song-aggregator.common')
  .service('songClient', songClient);