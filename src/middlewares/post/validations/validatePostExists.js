import expressValidator from 'express-validator';
import postService from '../../../services/postService';
import locales from '../../../locales/en.json';

const { POST_NOT_EXISTS } = locales.post.responses;
const { check } = expressValidator;

const validatePostExists = check('id')
  .exists()
  .isString()
  .custom(async (postId) => {
    const post = await postService.findById(postId);
    if (!post) {
      return Promise.reject(new Error(POST_NOT_EXISTS));
    }
    return Promise.resolve();
  });

export default validatePostExists;
