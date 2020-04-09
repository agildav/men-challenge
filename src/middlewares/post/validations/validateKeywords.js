import expressValidator from 'express-validator';
import { MIN_KEYWORDS_LENGTH } from '../../../models/post';
import locales from '../../../locales/en.json';

const { KEYWORDS_INVALID_LENGTH } = locales.post.validations;

const { check } = expressValidator;

const validateKeywords = check('keywords')
  .isArray({ min: MIN_KEYWORDS_LENGTH })
  .withMessage(`${KEYWORDS_INVALID_LENGTH} ${MIN_KEYWORDS_LENGTH}`);

export default validateKeywords;
