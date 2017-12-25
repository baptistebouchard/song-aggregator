'use strict';

export default function songService($rootScope) {
  const self = this;

  self.broadCastSong = function broadCastSong(result) {
    $rootScope.$broadcast('new.song', result);
  };
}