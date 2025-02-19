
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="container px-4 py-16 mx-auto">
      <div className="max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl font-bold mb-8">Latest Updates</h1>
        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.title} 
              className="p-6 border-2 border-black rounded-lg hover:shadow-lg transition-all"
            >
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{post.date}</span>
                <Link 
                  to={post.link} 
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

const blogPosts = [
  {
    title: "The Future of AI in Investment",
    excerpt: "Discover how artificial intelligence is transforming the investment landscape...",
    date: "March 15, 2024",
    link: "#",
  },
  {
    title: "Understanding Market Trends",
    excerpt: "A comprehensive guide to analyzing and interpreting market trends...",
    date: "March 10, 2024",
    link: "#",
  },
];

export default Blog;
