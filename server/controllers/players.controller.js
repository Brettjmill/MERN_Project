const Player = require('../models/players.model');

module.exports = {

    create: function (req,res) {
        console.log('create method executed');

        Player.create(req.body)
            .then((player) => {
                res.json(player);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    findAll: function (req, res) {
        console.log('find all method executed');

        Player.find()
            .then((players) => {
                res.json(players);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    findOne: function (req, res) {
        console.log('find one method executed', 'url params:', req.params);

        Player.findById(req.params.id)
            .then((player) => {
                res.json(player);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    updatePlayer: function (req, res) {
        console.log('update player method executed', 'url params:', req.params);

        Player.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true
        })
            .then((player) => {
                res.json(player);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    deletePlayer: function (req, res) {
        console.log('delete player method executed', 'url params:', req.params);

        Player.findByIdAndDelete(req.params.id)
            .then ((player) => {
                res.json(player);
            })
            .catch ((err) => {
                res.status(400).json(err);
            }); 
        
    }
};