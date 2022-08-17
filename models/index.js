const User = require("./User");
const Song = require("./Song");
const Comment = require("./Comment");



Song.hasMany(Comment, {
    foreignKey: 'song_id',
    onDelete: 'CASCADE'
  });
  
  Comment.belongsTo(Song, {
    foreignKey: 'song_id'
  });

  


module.exports = {User, Song, Comment}
