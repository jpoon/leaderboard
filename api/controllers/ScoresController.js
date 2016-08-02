
/**
 * TaskController
 *
 * @description :: Server-side logic for managing tasks
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var ScoresController = {
  index: function(req, res) {
    Scores.query('SELECT TOP 5 *, RANK() OVER (ORDER BY score DESC) AS rank FROM scores', function(err, scores) {
      if (err) {
        sails.log.error(err);
        return res.json(err);
      }
      return res.json(scores);
    });
  },

  findOne: function(req, res) {
    var id = req.param('id');
    var json = ScoresController._findOne(id, function(err, data) {
      if (err) {
        sails.log.error(err);
        res.json(err);
      }
      return res.json(data);
    });
  },

  create: function(req, res) {
    Scores.create(req.allParams()).exec(function(err, data) {
      if (err) {
        sails.log.error(err);
        return res.json(err);
      } 

      var json = ScoresController._findOne(data['id'], function(err, data) {
        if (err) {
          sails.log.error(err);
          res.json(err);
        }
        return res.json(data);
      });
    });
  },

  _findOne(id, callback) {
    Scores.query('SELECT * FROM (SELECT *, RANK() OVER (ORDER BY score DESC) AS rank FROM scores) ranks WHERE ranks.id = ' + id, function(err, score) {
      callback(err, score[0]);
    });
  }
};

module.exports = ScoresController;