const models = require('../../database/models');

const event = require('./event')(models);
const github = require('./github')();

module.exports = {
    event,
    github,
}
