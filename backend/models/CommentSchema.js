import mongoose from "mongoose";

// Comment Schema Model - (Content of Comment, User, Blog, Creation Date)
const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "Comment Content is required"],
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog',
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },

});


const Comment = mongoose.model("Comment", commentSchema);

export default  Comment;
