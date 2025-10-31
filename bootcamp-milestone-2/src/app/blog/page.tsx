import BlogPreview from '@/components/blogPreview';
import blogs from '../blogData'; 

export default function Blog() {
  // Convert each entry in blogs into BlogPreview
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {blogs.map(blog => 
      <BlogPreview key={blog.title} {...blog}/> )}
    </div>
  );
}
