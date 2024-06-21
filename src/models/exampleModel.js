import { Schema, model } from 'mongoose';

const exampleSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model('Example', exampleSchema);
