import BlogPreview from '@/components/blogPreview';
import connectDB from '@/database/db';
import Blog from '@/database/blogSchema';

export default async function BlogPage() {
	const blogs = await getBlogs();
	if (blogs == null) {
		return <div>No data</div>;
	}
  // Convert each entry in blogs into BlogPreview
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {blogs.map(blog => 
	  <BlogPreview key={blog.slug} {...JSON.parse(JSON.stringify(blog))}/> )}
    </div>
  );
}

async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await Blog.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
	    return null
	}
}