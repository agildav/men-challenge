import models from '../models';

const { Post, Comment } = models;

const create = (post) => Post.create(post);

const findAll = (parameters) => Post.find({ ...parameters });

const findById = (id) => Post.findById(id).populate([{ path: 'comments' }]);

const createComment = (comment) => Comment.create(comment);

// eslint-disable-next-line arrow-body-style
const addCommentToPost = (comment, postId) => {
  return Post.findOneAndUpdate(
    { _id: postId },
    { $push: { comments: comment } },
  );
};

const postService = {
  create,
  findAll,
  findById,
  createComment,
  addCommentToPost,
};

export default postService;
