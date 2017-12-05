const graphql = require('graphql');
const { GraphQLList, GraphQLString } = graphql;

const { event } = require('../type');

const eventQuery = {
    type: event,
    // `args` describes the arguments that the `event` query accepts
    args: {
        id: { type: GraphQLString }
    },
    resolve: (root, { id }, { loaders }) => {
        return loaders.event.load(id);
    }
}

const eventsQuery = {
    type: new GraphQLList(event),
    resolve: (root, args, { loaders }) => {
        return loaders.events.load('all');
    }
}

module.exports = {
    event: eventQuery,
    events: eventsQuery,
};

