module.exports = function(sequelize, DataTypes){
    return sequelize.define('todo', {
        description:{
            type: DataTypes.STRING,
            alloqNull: false,
            validate:{
                len:[1,250]
            }
        },
        completed:{
            type: DataTypes.BOOLEAN,
            alloqNull: false,
            defaultValue: false
        }
    });
};