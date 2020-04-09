import express from 'express';
import postMiddlewares from '../middlewares/post';
import commonValidations from '../middlewares/common/validations';
import postValidations from '../middlewares/post/validations';
import { isAuthorized } from '../middlewares/common/isAuthorized';

const {
  validateTitle,
  validateKeywords,
  validateBody: validatePostBody,
  validateAuthorExists,
  validateId,
  validatePostExists,
} = postValidations;

const { validateBody } = commonValidations;
const {
  createPost,
  findAllPosts,
  findPostById,
  createComment,
} = postMiddlewares;

const postRouter = express.Router();

const createPostValidations = [
  validateTitle,
  validateKeywords,
  validatePostBody,
  validateAuthorExists,
];

const createCommentValidations = [validatePostExists, validatePostBody];

const createPostMiddleware = validateBody(createPostValidations);
postRouter.post('/', isAuthorized, createPostMiddleware, createPost);

postRouter.get('/', isAuthorized, findAllPosts);

postRouter.get('/:id', isAuthorized, validateId, findPostById);

const createCommentMiddleware = validateBody(createCommentValidations);
postRouter.post(
  '/:id/comments',
  isAuthorized,
  createCommentMiddleware,
  createComment,
);

export default postRouter;
