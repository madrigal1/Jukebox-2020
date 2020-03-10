var SpotifyWebApi = require('spotify-web-api-node');


const spotifyApiInit = (req, res, next) => {
    var spotifyApi = new SpotifyWebApi({
        clientId: process.env.CLIENT_ID || null,
        clientSecret: process.env.CLIENT_SECRET || null,
        redirectUri: process.env.REDIRECT_URI || null
    });

    if (!req.query.access_token && !res.spotifyApi)
        res.json({ error: "no access token passed" })
    else {
        spotifyApi.setAccessToken(req.query.access_token);
        spotifyApi.setRefreshToken(req.query.setRefreshToken);
        res.spotifyApi = spotifyApi;
        next()
    };
};


module.exports = spotifyApiInit;