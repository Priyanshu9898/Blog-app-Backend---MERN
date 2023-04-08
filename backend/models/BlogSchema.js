import mongoose from "mongoose";

// Blog Schema Model - (Title, Content, User (author), Comments, Creation Date) with validation rules
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title of the blog is required"],
        minLength: [4, "Titles must be at least 4 characters"],
        maxLength: [80, "Titles can not exceed 80 characters"],
      },
      content: {
        type: String,
        required: [true, "Content of the blog is required"],
        minlength : [50, "Content Must Be Atleast 50 characters"],
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      comments: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Comment',
        },
      ],

      createdAt: {
        type: Date,
        default: Date.now,
      },
});


const Blog = mongoose.model("Blog", blogSchema);

export default  Blog;
