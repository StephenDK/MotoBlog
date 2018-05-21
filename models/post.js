const mongoose = require('mongoose');

const { Schema } = mongoose;

const PostSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: "Title is Required"
    },
    author: {
        type: String,
        trim: true,
        required: "Author is Required"
    },
    description: {
        type: String,
        required: "Description is Required"
    },
    postCreated: {
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model("Posts", PostSchema);

module.exports = Post;