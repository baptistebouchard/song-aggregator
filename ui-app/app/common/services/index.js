'use strict';

import songService from './song.service';

angular.module('song-aggregator.common')
  .service('songService', songService);