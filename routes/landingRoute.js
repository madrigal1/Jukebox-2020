require("dotenv").config();
const router = require("express").Router();

const { login, callback, refresh_token } = require("../controllers/spotifyAuth");

router.get("/login", login)
router.get("/callback", callback);
router.get("/refresh_token", refresh_token);
module.exports = router;
