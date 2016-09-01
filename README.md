
# Leaderboard [![Deploy to Azure](http://azuredeploy.net/deploybutton.svg)](https://azuredeploy.net/)

[Sails.js](http://sailsjs.org/) powered leaderboard currently configured to use [SQL Server](https://github.com/jpoon/leaderboard/blob/master/config/connections.js) as the backing data store. 

## Getting Started

* `npm install`
* `npm install -g nodemon` 
* `bower install`
* `nodemon app.js` or `nodemon app.js --prod`

## API

* `GET /` - Top 5 Highest Scores
* `GET /<id>` - Retrieves details about a game id
* `POST /create?username=<username>&score=<score>` - Saves a new gamescore for a user

The above APIs will return the following response object:

```
{
  username: <username>,
  score: <score>,
  id: <id>,
  createdAt: <createdAt>,
  rank: <rank>
}
```
