'use strict';

const Validator = require('jsonschema').Validator;

module.exports = function createQueryValidator() {
  /**
   * Validates Query coming from get song call
   */
  const validate = function validate(query) {
    const validator = new Validator();
    const schema = {
      type: 'object',
      required: [
        'title',
        'artist',
      ],
      properties: {
        title: {
          type: 'string',
          minimum: 1,
          maximum: 75,
        },
        artist: {
          type: 'string',
          minimum: 1,
          maximum: 75,
        },
      },
    };
    return validator.validate(query, schema);
  };

  return {
    validate,
  };
};