require('dotenv').config();
const cors = require('cors');
const app = require('./modules/app/app');
const { PORT, CLIENT_ORIGIN } = require('./config');

app.use(
  cors({
    origin: CLIENT_ORIGIN,
  })
);

app.listen(PORT, () => {
  console.log(`[petful-server] Listening on ${PORT}.`);
});
