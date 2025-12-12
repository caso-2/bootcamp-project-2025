import BlogPreview from '@/components/blogPreview';
import blogs from '../blogData'; 
import BlogArticle from '@/components/blogArticle';

export default function Blogs() {
  return (
    <div>
      {blogs.map(blog => 
      <BlogArticle key={blog.title} {...blog}/> )}
    </div>
  );
}
