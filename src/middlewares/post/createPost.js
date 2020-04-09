import postService from '../../services/postService';

const createPost = async (req, res, next) => {
  try {
    const postBody = { ...req.body, author: req.user._id };

    const post = await postService.create(postBody);

    return res.status(200).send(post);
  } catch (err) {
    return next(err);
  }
};

export default createPost;
