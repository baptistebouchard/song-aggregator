'use strict';

import angular from 'angular';
import createRoutes from './song.route';
import songComponent from './song.component';

require('../../common/');

angular.module('song-aggregator.song', [
  'song-aggregator.common',
])
  .component('song', songComponent)
  .run(createRoutes);