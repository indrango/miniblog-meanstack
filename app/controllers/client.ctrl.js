var Article = require('../models/article');

exports.list = function(req, res) {
  Article.find(function(err, articles) {
    if (err)
      res.send(err);

    res.json(articles);
  });
};
