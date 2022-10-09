const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// post new comment
router.post('/', withAuth, async (req, res) => {
  try {
    //create new comment as per req.body from user
    const newComment = await Comment.create(req.body);
    
    console.log(req.body.blogIdint);
    console.log(req.body);

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;