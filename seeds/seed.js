//code to seed in data
const sequelize = require('../config/connection');
const { User, Song, Comment } = require('../models');

const userData = require('./userData.json');
const songData = require('./songData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const songs = await Song.bulkCreate(songData, {
    individualHooks: true,
    returning: true,
  });

  for (const comment of commentData) {
    await Comment.create({
      ...comment,
    });
  }

  process.exit(0);
};

seedDatabase();
