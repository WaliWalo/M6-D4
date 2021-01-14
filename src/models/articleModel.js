const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArticleSchema = new Schema(
  {
    headLine: { type: String, required: true },
    subHead: { type: String },
    content: { type: String, required: true },
    category: {
      name: { type: String, required: true },
      img: { type: String, required: true },
    },
    author: {
      name: { type: String, required: true },
      img: { type: String },
    },
    cover: { type: String },
    reviews: [
      {
        text: {
          type: String,
          required: true,
        },
      },
      {
        user: {
          type: String,
          required: false,
        },
      },
      {
        date: {
          type: Date,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = ArticleSchema;
