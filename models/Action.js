module.exports = (sequelize, DT) => {
    const Action = sequelize.define("Action", {
        order: {
            type: DT.INTEGER,
            allowNull: false,
            default: 1,
        },    
    
    });


    Action.associate = function(models) {
        Action.belongsTo(models.Scene);
        Action.belongsToMany(models.Resource, {through: models.ActionItem});
    }
    return Action;
}