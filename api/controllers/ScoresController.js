
/**
 * TaskController
 *
 * @description :: Server-side logic for managing tasks
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  index: function(req, res) {
    Scores.query('SELECT TOP 5 *, RANK() OVER (ORDER BY score DESC) AS rank FROM scores', function(err, scores) {
      res.send(scores);
    });
  },

  findOne: function(req, res) {
    var id = req.param('id');
    Scores.query('SELECT * FROM (SELECT *, RANK() OVER (ORDER BY score DESC) AS rank FROM scores) ranks WHERE ranks.id = ' + id, function(err, score) {
      res.send(score);
    });
  }
};
