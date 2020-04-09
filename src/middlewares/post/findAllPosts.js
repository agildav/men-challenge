import postService from '../../services/postService';
import { filterParams } from '../../utils/paramsUtil';

const findAllPosts = async (req, res, next) => {
  try {
    const allowedQueryParams = ['author'];

    const posts = await postService.findAll(
      filterParams(req.query, allowedQueryParams),
    );
    return res.status(200).send(posts);
  } catch (err) {
    return next(err);
  }
};

export default findAllPosts;
