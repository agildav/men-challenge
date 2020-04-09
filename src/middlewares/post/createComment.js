import postService from '../../services/postService';

const setAuthor = (req) => req.user._id;
const setPost = (req) => req.params.id;

const createComment = async (req, res, next) => {
  try {
    const post = await postService.createComment({
      ...req.body,
      author: setAuthor(req),
      post: setPost(req),
    });

    return res.status(200).send(post);
  } catch (err) {
    return next(err);
  }
};

export default createComment;
