import mongoose from 'mongoose';

const { Schema } = mongoose;
export const MAX_TITLE_LENGTH = 20;
export const MIN_KEYWORDS_LENGTH = 1;
export const MAX_BODY_LENGTH = 200;

export const TITLE_FIELD_NAME = 'title';
export const KEYWORDS_FIELD_NAME = 'keywords';
export const COMMENTS_FIELD_NAME = 'comments';
export const AUTHOR_FIELD_NAME = 'author';
export const BODY_FIELD_NAME = 'body';

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxlength: MAX_TITLE_LENGTH,
  },
  keywords: {
    type: [String],
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  body: {
    type: String,
    required: true,
    maxlength: MAX_BODY_LENGTH,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
      required: false,
    },
  ],
  date: { type: Date, default: Date.now },
});

PostSchema.methods.toJSON = function () {
  const user = this.toObject({ versionKey: false });
  return user;
};

export default mongoose.model('Post', PostSchema);
