const path = require('path');
const express = require('express');
const expressStaticGzip = require('express-static-gzip');
const rateLimit = require('express-rate-limit');
const paths = require('./paths');

const limiter = rateLimit({
  windowMs: 1 * 60 * 100, // 1 minute
  max: 200,
});

const app = express();

app.use(
  '/',
  expressStaticGzip(path.join(__dirname), {
    enableBrotli: true,
  })
);

app.use(limiter);

app.get('/', (_request, response) => {
  response.sendFile(paths.INDEX_PAGE);
});

app.listen(paths.PORT);
