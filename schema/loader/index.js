const models = require('../../database/models');

const event = require('./event')(models);
const events = require('./events')(models);

const github = require('./github')();

module.exports = {
    event,
    events,
    
    github,
}
