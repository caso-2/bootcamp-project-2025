import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
type Comment = {
    user: string
    comment: string
    date: Date
};

// mongoose schema 
const portfolioCommentSchema = new Schema<Comment>({
    
    user: { type: String, required: true },
    comment: { type: String, required: true },
    date: { type: Date, required: true, default: new Date() },
})

// defining the collection and model
const Comment = mongoose.models['portfoliocomments'] ||
    mongoose.model('portfoliocomments', portfolioCommentSchema);

export default Comment;