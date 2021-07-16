
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let articleSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    tags: [String],
    author: String,
    likes: {type: Number, default: 0},
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
}, {timestamps: true});

module.exports = mongoose.model("Article", articleSchema);