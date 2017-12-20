'use strict';

const assert = require('assert');
const ObjectMapper = require('object-mapper');

module.exports = function createSongMapper(tabMapper) {
  assert(tabMapper, 'tabMapper is required');

  const mapSong = function mapSong(song) {
    const mapper = {
      'lyrics': {
        key: 'lyrics?',
        transform: (result) => {
          return result.isFulfilled ? result.value.lyrics : null;
        },
      },
      'tabs': [
        {
          key: 'tabs',
          transform: (result) => {
            if (result.isFulfilled) {
              return result.value.match.map(tab => tabMapper.mapTab(tab));
            }
            return [];
          },
        },
        {
          key: 'tabSuggestions',
          transform: (result) => {
            if (result.isFulfilled) {
              return result.value.suggestions.map(tab => tabMapper.mapTab(tab));
            }
            return [];
          },
        },
      ],
    };
    return ObjectMapper(song, mapper);
  };

  return {
    mapSong,
  };
};