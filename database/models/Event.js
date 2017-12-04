module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define("Event", {
    name: DataTypes.STRING,
  });

  Event.associate = (models) => {
    Event.belongsToMany(models.User, { 
      through: 'Attendees',
      as: 'attendees'
    });
  };

  return Event;
};
