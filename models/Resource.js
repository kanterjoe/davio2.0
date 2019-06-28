module.exports = (sequelize, DT) => {
    const Resource = sequelize.define("Resource", {
        name: DT.STRING,
        type: DT.ENUM('audio', 'light sequence'),
        note: DT.STRING,
        location: DT.STRING,
    });


    Resource.associate = function(models) {
        Resource.belongsToMany(models.Action, {through: models.ActionItem})
    }
    return Resource;
}