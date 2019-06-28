module.exports = (sequelize, DT) => {
    const Scene = sequelize.define("Scene", {
        name: {
            type: DT.STRING,
            allowNull: false,
            unique: true,
        },
        isCurrent: {            
            allowNull: false,
            type: DT.BOOLEAN,
            default: false
        }
    });

    Scene.associate = function(models) {
        Scene.hasMany(models.Action);
    }
    return Scene;
}