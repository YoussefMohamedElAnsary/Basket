import BlogCard from "../components/BlogCard";
import Sidebar from "../components/Sidebar";
import Pagination from "../components/Pagination";
import water from "../assets/water.jpg";
import chocolate from "../assets/chocolate.jpg";
import Footer from "../components/Footer";
import Breadcrumbs from '../components/Breadcrumbs.jsx';

const BlogPage1 = () => {
  return (
    <> 
      
    <div className="px-[180px]">
      <Breadcrumbs />
     </div>
     
    <div className="max-w-7xl mx-auto p-6 grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-10">
        <BlogCard
          image={water}
          title="But I must explain to you how all this mistaken idea"
          description="Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros laoreet libero, vitae suscipit lorem turpis sit amet lectus. Quisque egestas lorem ut mauris ultricies,..."
          category="Biography"
          date="Jan 13 2025"
          author="Sinan ISIK"
        />

        <BlogCard
          image={chocolate}
          title="The Problem With Typefaces on the Web"
          description="Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros laoreet libero, vitae suscipit lorem turpis sit amet lectus. Quisque egestas lorem ut mauris ultricies,..."
          category="Biography"
          date="Jan 13 2025"
          author="Sinan ISIK"
        />

        <Pagination />
      </div>

      <Sidebar />
    </div>
     <Footer />
    </>
   
  );
};

export default BlogPage1;

