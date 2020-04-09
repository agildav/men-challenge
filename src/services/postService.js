import models from '../models';

const { Post, Comment } = models;

const create = (post) => Post.create(post);

const findAll = (parameters) => Post.find({ ...parameters });

const findById = (id) => Post.findById(id);

const createComment = (comment) => Comment.create(comment);

const postService = {
  create,
  findAll,
  findById,
  createComment,
};

export default postService;
