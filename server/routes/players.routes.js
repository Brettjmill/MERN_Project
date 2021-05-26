const playerController = require('../controllers/players.controller');

module.exports = (app) => {
    app.post('/api/players', playerController.create);
    app.get('/api/players', playerController.findAll);
    app.get('/api/players/:id', playerController.findOne);
    app.put('/api/players/:id', playerController.updatePlayer);
    app.delete('/api/players/:id', playerController.deletePlayer);
};