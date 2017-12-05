const graphql = require('graphql');
const { GraphQLString } = graphql;

const { event, eventInput } = require('../type');

const eventCreate = {
    type: event,
    description: 'Create a new Event',
    // `args` describes the arguments that the `event` mutation accepts
    args: {
        input: { type: eventInput }
    },
    resolve: (root, { input }, { loaders }) => {
        return root.db.Event.create(input)
            .then(loaders.events.clear('all'));
    }
}

module.exports = eventCreate;