import models from '../models';

const { Post } = models;

const create = (post) => Post.create(post);

const findAll = (parameters) => Post.find({ ...parameters });

const findById = (id) => Post.findById(id);

const postService = { create, findAll, findById };

export default postService;
