import mongoose, { Schema } from "mongoose";
import { IComment } from "./blogSchema";

// typescript type (can also be an interface)
type Project = {
    title: string;
    slug: string; 
    date: Date;
    description: string; // for preview
    image: string; // url for string in public
    image_alt: string; // alt for image
    link: string;
    comments: IComment[];
};

// mongoose schema 
const projectSchema = new Schema<Project>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: Date, required: false, default: new Date()},
    description: { type: String, required: true },
    image: { type: String, required: true },
    image_alt: { type: String, required: true },
    link: { type: String, required: true},
    comments: [{ // Define comments as an array of objects
        	user: { type: String, required: true },
        	comment: { type: String, required: true },
        	date: { type: Date, required: true, default: new Date() },
    }],
})

// defining the collection and model
const Project = mongoose.models['projects'] ||
    mongoose.model('project', projectSchema);

export default Project;