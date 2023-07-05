import mongoose from '../database/index';
import { model } from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true,
  },
  email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
  },
  password: {
      type: String,
      required: true,
      select: false,
  },
  passwordResetToken: {
      type: String,
      select: false,
  },
  passwordResetTokenExpiration: {
      type: Date,
      select: false,
  },
  isAdmin: {
      type: Boolean,
      default: false,
  },
  isMod: {
      type: Boolean,
      default: false,
  },
  image: {
      type: String,
      default: undefined,
  },
  createdAt: {
      type: Date,
      defalut: Date.now,
  },
});

export default model('User', UserSchema);