'use strict';

module.exports = {
  'lyrics': {
    key: 'lyrics',
    transform: (result) => {
      return result.isFulfilled ? result.value.lyrics : 'no lyrics';
    },
  },
};