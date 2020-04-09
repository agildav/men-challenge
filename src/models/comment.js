import mongoose from 'mongoose';

const { Schema } = mongoose;
export const MAX_BODY_LENGTH = 200;
export const AUTHOR_FIELD_NAME = 'author';
export const POST_FIELD_NAME = 'post';
export const BODY_FIELD_NAME = 'body';

const CommentSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
  },
  body: {
    type: String,
    required: true,
    maxlength: MAX_BODY_LENGTH,
  },
  date: { type: Date, default: Date.now },
});

CommentSchema.methods.toJSON = function () {
  const comment = this.toObject({ versionKey: false });
  return comment;
};

export default mongoose.model('Comment', CommentSchema);
