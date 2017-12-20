'use strict';
const assert = require('assert');

module.exports = function createSongRouter({ songService, songQueryValidator }) {
  assert(songService, 'songService is required');
  assert(songQueryValidator, 'songQueryValidator is required');

  return {
    '/': {
      get: [
        function getSong(req, res, next) {
          const validationResult = songQueryValidator.validate(req.query);
          if (!validationResult.valid) {
            return res.status(400).json({
              errors: validationResult.errors.map((error) => (error.message)),
            });
          }
          return songService.getSong(req.query)
            .then((song) => res.status(200).json(song))
            .catch(next);
        },
      ],
    },
  };
};