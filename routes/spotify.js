const router = require("express").Router();
const apiInit = require("../middlewares/initSpotifyApi");
const spotifyWrapper = require("../controllers/spotifyWrapper");


router.use(apiInit);
router.get("/", (req, res) => {
    const spotifyApi = res.spotifyApi;
    console.log("initialization of auth over", spotifyApi);
});
router.get("/playlist", spotifyWrapper.Tracks);




module.exports = router;




