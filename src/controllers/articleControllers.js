const mongoose = require("mongoose");
const ArticleSchema = require("../models/articleModel");
const q2m = require("query-to-mongo");
const Article = mongoose.model("Article", ArticleSchema);

const getArticles = async (req, res) => {
  const query = q2m(req.query);
  const total = await Article.countDocuments(query.criteria);
  const articles = await Article.find(query.criteria, query.options.fields)
    .skip(query.options.skip)
    .limit(query.options.limit)
    .sort(query.options.sort);
  res.send({ links: query.links("/articles", total), articles });
};

const addNewArticle = (req, res) => {
  let newArticle = new Article(req.body);
  newArticle.save((err, article) => {
    if (err) {
      res.send(err);
    }
    res.json(article);
  });
};

const getArticleById = (req, res) => {
  Article.findById(req.params.articleId, (err, article) => {
    if (err) {
      res.send(err);
    }
    res.json(article);
  });
};

const updateArticle = (req, res) => {
  Article.findOneAndUpdate(
    { _id: req.params.articleId },
    req.body,
    { new: true, useFindAndModify: false },
    (err, article) => {
      if (err) {
        res.send(err);
      }
      res.json(article);
    }
  );
};

const deleteArticle = (req, res) => {
  Article.findOneAndDelete({ _id: req.params.articleId }, (err, article) => {
    if (err) {
      res.send(err);
    }
    res.json(article);
  });
};
module.exports = {
  getArticles,
  addNewArticle,
  getArticleById,
  updateArticle,
  deleteArticle,
};
