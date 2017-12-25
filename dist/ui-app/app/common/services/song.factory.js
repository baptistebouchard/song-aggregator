'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = songFactory;
function songFactory() {

  songFactory.broadCastSong = function broadCastSong(result) {
    $rootScope.$on('new.song', result);
  };

  return songFactory;
}
//# sourceMappingURL=song.factory.js.map