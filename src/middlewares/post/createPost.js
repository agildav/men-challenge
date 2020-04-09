import postService from '../../services/postService';

// can be improved if application handles roles
// admin roles could create posts on behalf of another user
// regular users can only create their own posts
const setAuthor = (req) => req.user._id;

const createPost = async (req, res, next) => {
  try {
    const post = await postService.create({
      ...req.body,
      author: setAuthor(req),
    });

    return res.status(200).send(post);
  } catch (err) {
    return next(err);
  }
};

export default createPost;
