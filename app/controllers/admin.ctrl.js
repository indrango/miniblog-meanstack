var Article = require('../models/article');

exports.add = function(req, res) {
  var article = new Article();
  article.date = req.body.date;
  article.title = req.body.title;
  article.content = req.body.content;
  article.date = new Date().toString();

  article.save(function(err, article) {
    if (err)
      res.send(err);

    res.json(article);
  });
};

exports.view = function(req, res) {
  Article.find(function(err, articles) {
    if (err)
      res.send(err);

    res.json(articles);
    console.log('This is get article');
  });
};

exports.update = function(req, res) {
  Article.findById(req.params.user_id, function(err, article) {
    if (err)
      res.send(err);

    res.json(article);
  });
};

exports.delete = function(req, res) {
  Article.findByIdAndRemove({ _id: req.params.user_id }, function(err, article) {
    if (err)
      res.send(err);

    res.json(article);
  });
};
