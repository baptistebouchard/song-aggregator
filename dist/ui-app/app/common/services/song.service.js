'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = songService;
function songService($rootScope) {
  var self = this;

  self.broadCastSong = function broadCastSong(result) {
    $rootScope.$broadcast('new.song', result);
  };
}
//# sourceMappingURL=song.service.js.map