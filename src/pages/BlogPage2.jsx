import BlogCard from "../components/BlogCard";
import Sidebar from "../components/Sidebar";
import Pagination from "../components/Pagination";
import tea from "../assets/tea.jpg";
import salad from "../assets/salad.jpg";
import Footer from "../components/Footer"
const BlogPage2 = () => {
  return (
    <>
    <div className="max-w-7xl mx-auto p-6 grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-10">
        <BlogCard
          image={tea}
          title="English Breakfast Tea with Sweet Desserts"
          description="Explore the rich flavor of classic tea with perfect sweet matches."
          category="Lifestyle"
          date="Jan 15 2025"
          author="Sinan ISIK"
        />

        <BlogCard
          image={salad}
          title="The Rise of Organic Foods in Daily Meals"
          description="More people are choosing organic for better health and environment."
          category="Health"
          date="Jan 15 2025"
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

export default BlogPage2;
