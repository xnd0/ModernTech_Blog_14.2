const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Song extends Model {}

Song.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        song_name:{
            type: DataTypes.STRING
        },
        artist_name:{
            type: DataTypes.STRING
        },
        url:{
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'song'
    }
)

module.exports = Song;