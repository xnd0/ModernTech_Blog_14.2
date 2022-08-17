// ------------------------- //
// ----- songRoutes.js ----- //
// ------------------------- //


const router = require('express').Router();
const { Song , Comment } = require('../../models');

// route to create/add a song using async/await -v3
router.post('/', async (req, res) => {
    try {
        const songData = await Song.create({
            song_name: req.body.song_name,
            artist_name: req.body.artist_name,
            url: req.body.url,

        });

        const commentData = await Comment.create({
            song_id: songData.id,
            comment_text: req.body.comment_text,

        });

        // if the song is successfully created, the new response will be returned as json
        // req.session.save(() => {
            res.status(200).json(songData)
        // });
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
});


module.exports = router;
