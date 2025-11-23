import connectDB from "@/database/db";
import Blog, { IComment } from "@/database/blogSchema";
import { notFound } from 'next/navigation';
import Image from "next/image";
import Comment from "@/components/comment";
import { Key } from "react";

 
type Props = {
    params: { slug: string }
}
 
async function getBlog(slug: string) {
    await connectDB();
    try {
        const blog = await Blog.findOne({ slug: slug }).orFail();
        return blog;
    } catch (err) {
        return null;
    }
}
 
export default async function BlogPage({ params }: Props) {
    const blog = await getBlog(params.slug);
 
    if (!blog) {
        notFound();
    }
 
    return (
        <main>
            <h1 className="blog-title">{blog.title}</h1>
            <Image src={blog.image} alt={blog.image_alt} width={1000} height={1000} />
            <p>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <div>{blog.content}</div>
             <div>
	            {/* ... other blog content */}
	            {blog.comments.map((comment: IComment, index: Key | null | undefined) => (
	                <Comment key={index} comment={comment} />
	            ))}
	        </div>
        </main>
    );
}