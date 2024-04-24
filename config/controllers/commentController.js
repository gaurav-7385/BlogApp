//import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

//business logic

exports.createComment = async (req, res) => {
  try {
    //fetch data from req body
    const { post, user, body } = req.body;
    //create a comment object
    const comment = new Comment({
      post,
      user,
      body,
    });
    //save the new comment into database
    const savedComment = await comment.save();

    //find the postby Id add the new comment to its comment array
    const updatedpost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } },
      { new: true } //this will return updated comment
    )
      .populate("comments") //populate the comment array with comment document
      .exec();
    res.json({
      post: updatedpost,
    });
  } catch (err) {
    console.error("Error while creating comment:", err); // Log the specific error
    return res.status(500).json({
      error: "Error while Creating comment",
    });
  }
};
