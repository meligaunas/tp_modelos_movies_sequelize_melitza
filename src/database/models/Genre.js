module.exports =(sequelize, dataTypes) => {

    const alias = "Genre";

    const cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        created_at : {
            type : dataTypes.DATE,
            allowNull : true
        },
        name : {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        ranking : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            unique : true
        },
        active : {
            type : dataTypes.BOOLEAN,
            allowNull : false,
            defaultValue : 0
        }
    }
    const config = {
        tableName : "Genres",
        timestamps : true,
        underscored : true
    }
    const Genre = sequelize.define(alias,cols,config);
    return Genre

}