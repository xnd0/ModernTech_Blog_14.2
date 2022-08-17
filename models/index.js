const User = require("./User");
const Video = require("./Video");
const Song = require("./Song");
const Comment = require("./Comment");



Song.hasMany(Comment, {
    foreignKey: 'song_id',
    onDelete: 'CASCADE'
  });
  
  Comment.belongsTo(Song, {
    foreignKey: 'song_id'
  });

  


module.exports = {User, Video, Song, Comment}
