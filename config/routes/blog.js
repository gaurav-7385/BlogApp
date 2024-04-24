const express = require("express");
const router = express.Router();

//import controller
const {
  dummyLink,
  likePost,
  unlikePost,
} = require("../controllers/likeController");
const { createComment } = require("../controllers/commentController");
const { createPost, getAllPosts } = require("../controllers/postController");

//mapping create
router.get("/dummyrouter", dummyLink);
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/Likes/like", likePost);
router.post("/Likes/unlike", unlikePost);

//export

module.exports = router;
