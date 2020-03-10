



const Tracks = (req, res) => {
    const spotifyApi = req.spotifyApi;
    console.log(spotifyApi);
    spotifyApi.getFeaturedPlaylists({ limit: 3, offset: 1, country: 'SE', locale: 'sv_SE', timestamp: '2014-10-23T09:00:00' })
        .then(function (data) {
            console.log(data.body);
        }, function (err) {
            console.log("Something went wrong!", err);
        });
}

module.exports = {
    Tracks
}