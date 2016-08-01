
/**
 * TaskController
 *
 * @description :: Server-side logic for managing tasks
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  index: function(req, res) {
    Scores.query('SELECT TOP 5 username, score, RANK() OVER (ORDER BY score DESC) AS rank FROM scores', function(err, scores) {
    console.log(JSON.stringify(scores));
      res.send({
        leaderboard: scores 
      });
    });
  }
};
