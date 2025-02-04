// models/News.js

import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
  imgUrl: String,
  title: String,
  news: String,
  tags: [String],
  description: String,
  author: String,
  dateTime: {
    type: Date,
    default: Date.now,
  },
});

const News = mongoose.models.News || mongoose.model("News", NewsSchema);

export default News;
