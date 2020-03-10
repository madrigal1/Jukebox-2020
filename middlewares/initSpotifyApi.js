var SpotifyWebApi = require('spotify-web-api-node');


const spotifyApiInit = (req, res, next) => {
    var spotifyApi = new SpotifyWebApi({
        clientId: 'fcecfc72172e4cd267473117a17cbd4d',
        clientSecret: 'a6338157c9bb5ac9c71924cb2940e1a7',
        redirectUri: 'http://www.example.com/callback'
    });

    if (!req.query.access_token)
        res.json({ error: "no access token passed" })
    else {
        spotifyApi.setAccessToken(req.query.access_token);
        spotifyApi.setRefreshToken(req.query.setRefreshToken);
        res.spotifyApi = spotifyApi;
        next()
    };
};


module.exports = spotifyApiInit;