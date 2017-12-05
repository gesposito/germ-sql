const RedisDataLoader = require('./loader');

const eventsLoader = (models) => {
    const options = {
        include: [{
            model: models.User,
            as: "attendees",
            through: {
                attributes: []
            }
        }]
    };
    
    const allEvents = () => models.Event.findAll(
        options
    );

    return RedisDataLoader(
        'events',
        (ids) => Promise.all(
            ids.map(allEvents)
        )
    );
}

module.exports = eventsLoader;