import dojoModel from "../../models/Dojo";

export default (sequelize, DataTypes) => {
    const Dojo = sequelize.define('dojo', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: DataTypes.STRING(255),
        location_string: DataTypes.STRING(255),
        location_lat: DataTypes.DECIMAL(10, 7),
        location_lng: DataTypes.DECIMAL(10, 7)
    }, {
        timestamps: true,
        tableName: 'dojos'
    });

    Dojo.associate = ({ Order }) => {
        
    };

    return Dojo;
}