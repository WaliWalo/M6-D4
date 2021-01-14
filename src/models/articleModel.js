const mongoose = require("mongoose");
const AuthorSchema = require("../models/authorModel");
const Author = mongoose.model("Author", AuthorSchema);
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
    author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
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
