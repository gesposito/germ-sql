const RedisDataLoader = require('./loader');

const eventLoader = (models) => {
    const options = {
        include: [{
            model: models.User,
            as: "attendees",
            through: {
                attributes: []
            }
        }]
    };
    
    const eventById = (id) => models.Event.findById(
        parseInt(id, 10), 
        options
    );

    return RedisDataLoader(
        'event',
        (ids) => Promise.all(
            ids.map(eventById)
        )
    );
}

module.exports = eventLoader;