'use strict';

class RessourceNotFoundError extends Error {
  constructor(message, status) {
    super(message || 'Ressource not found!');
    this.status = status || 404;
  }
}

module.exports = RessourceNotFoundError;