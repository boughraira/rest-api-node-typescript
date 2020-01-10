import { Document, Schema, Model, model, Error } from "mongoose";

export interface IPost extends Document {
  postId: String;
  description: String;
  imageUrl: String;
  
}

export const postSchema = new Schema({
  postId: String,
  description: String,
  imageUrl: String,
  
});



export const Post: Model<IPost> = model<IPost>("post", postSchema);