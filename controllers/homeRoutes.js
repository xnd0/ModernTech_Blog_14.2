// ------------------------- //
// ----- homeRoutes.js ----- //
// ------------------------- //


const router = require('express').Router()
const { Song , Comment, Video } = require('../models');

// GET all songs 
router.get('/', async (req, res) => {
    const songData = await Song.findAll({
        include : [{ model: Comment }]
    })
    const videoData = await Video.findAll({

    });

    // Serialize data so the template can read it
    const videos = videoData.map(video => video.get({plain: true }));
    const songs = songData.map((song) => song.get({ plain: true }));

    songs.forEach(song => {
        song.video_link = videos.find(video => video.song_id === song.id)?.video_link;
    })
    console.log(songs);
    res.render('home', { songs , email: req.session.email, logged_in: req.session.logged_in });
});


router.get('/add-song', async (req, res) => {
    const songData = await Song.findAll()
        console.log(songData);

    // Serialize data so the template can read it
    const songs = songData.map((song) => song.get({ plain: true }));

        res.render('all', { songs , logged_in: req.session.logged_in });
});


// View song list
router.get('/songlist', async (req, res) => {
    const songData = await Song.findAll()
        console.log(songData);

    // Serialize data so the template can read it
    const songs = songData.map((song) => song.get({ plain: true }));

        res.render('songlist', { songs, logged_in: req.session.logged_in });
});


router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router;
