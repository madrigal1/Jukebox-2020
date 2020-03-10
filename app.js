const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");


const app = express();
const port = process.env.PORT || 3000;

const auth = require("./routes/landingRoute");
const spotifyRoute = require("./routes/spotify");

app
  .set('trust proxy', 1) // trust first proxy
  .use(session({
    secret: 'the eiffel tower on steroids',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  }))
  .use(express.static(path.join(__dirname, "/public")))
  .use(cors())
  .use(cookieParser())
  .use(express.json())
  .use(express.urlencoded({ extended: true }));

app.use("/", auth);
app.use("/spotify", spotifyRoute)
app.use((req, res, next) => {
  const error = new Error(`[${req.originalUrl}] not found`);
  res.status = 404;
  next(error);
})
app.use((error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.statusCode = statusCode;
  res.json({
    error: error.message
  })
});

app.listen(port, () => console.log(`Server runnning on: ${port}`));
