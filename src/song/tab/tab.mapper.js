'use strict';

const assert = require('assert');
const ObjectMapper = require('object-mapper');

module.exports = function createTabMapper(tabUrlUtils) {
  assert(tabUrlUtils, 'tabUrlUtils is required');

  const mapTab = function mapTab(tab) {
    const mapper =  {
      title: 'title',
      'artist.name': 'artist',
      'url': {
        key: 'url',
        default: (source) => {
          return tabUrlUtils.getURlFromTabObject(source);
        },
      },
    };
    return ObjectMapper(tab, mapper);
  };

  return {
    mapTab,
  };
};