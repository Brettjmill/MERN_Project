const express = require('express');
const cors = require('cors');

const port = 8000;
const db_name = 'player-db';

require('./config/mongoose.config')(db_name);

const app = express();
app.use(express.json());
app.use(cors());

require('./routes/players.routes')(app);

app.listen(port, () => {
    console.log(`Listening on port ${port} for REQuests to RESpond to.`)
})