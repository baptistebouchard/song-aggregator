'use strict';
// dependencies
import angular from 'angular';
import 'bootstrap';

// sass
import './sass/main.scss';

// app module declaration
angular.module('song-aggregator',
  [
    'song-aggregator.song',
  ]);

// modules
import './common';
import './modules/song';
