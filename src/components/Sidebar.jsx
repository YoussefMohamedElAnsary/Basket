import { Link } from 'react-router-dom';
import water from '../assets/water.jpg';
import chocolate from '../assets/chocolate.jpg';
import ice from '../assets/ice.jpg';
import banner from '../assets/banner.jpg';
import { FaFacebookF, FaTwitter, FaInstagram, FaReddit, FaPinterestP } from 'react-icons/fa';

const Sidebar = () => {
  const posts = [
    { img: water, text: "But I must explain to you how all this mistaken idea" },
    { img: chocolate, text: "The Problem With Typefaces on the Web" },
    { img: ice, text: "English Breakfast Tea With Tasty Donut Desserts" }
  ];

  return (
    <div className="w-full lg:w-[400px] lg:pl-8 mt-10 lg:mt-0 space-y-10">

      {/* Recent Posts */}
      <div>
        <h3 className="text-lg font-semibold mb-4 uppercase">Recent Posts</h3>
        <ul className="space-y-4">
          {posts.map((post, index) => (
            <li key={index} className="flex items-center bg-white p-4 rounded-xl shadow-sm gap-4">
              <div className="relative w-14 h-14 min-w-[3.5rem]">
                <img src={post.img} alt={`Post ${index + 1}`} className="w-14 h-14 rounded-full object-cover" />
                <span className="absolute -top-2 -left-2 bg-green-500 text-white w-5 h-5 flex items-center justify-center text-xs font-bold rounded-full">
                  {index + 1}
                </span>
              </div>
              <Link to="/" className="text-sm font-semibold text-gray-800 hover:text-green-600 leading-snug max-w-[240px]">
                {post.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Social Media */}
      <div>
        <h3 className="text-lg font-semibold mb-4 uppercase">Social Media</h3>
        <div className="space-y-3 text-sm font-semibold w-full">
          <a href="#" className="flex items-center bg-[#3b5998] text-white px-6 py-3 rounded-md shadow w-full text-base">
            <FaFacebookF className="mr-3 text-lg" /> FACEBOOK
          </a>
          <a href="#" className="flex items-center bg-[#e1306c] text-white px-6 py-3 rounded-md shadow w-full text-base">
            <FaInstagram className="mr-3 text-lg" /> INSTAGRAM
          </a>
          <a href="#" className="flex items-center bg-[#1da1f2] text-white px-6 py-3 rounded-md shadow w-full text-base">
            <FaTwitter className="mr-3 text-lg" /> TWITTER
          </a>
          <a href="#" className="flex items-center bg-[#ff4500] text-white px-6 py-3 rounded-md shadow w-full text-base">
            <FaReddit className="mr-3 text-lg" /> REDDIT
          </a>
          <a href="#" className="flex items-center bg-[#bd081c] text-white px-6 py-3 rounded-md shadow w-full text-base">
            <FaPinterestP className="mr-3 text-lg" /> PINTEREST
          </a>
        </div>
      </div>

      {/* Widget Banner */}
      <div>
        <h3 className="text-lg font-semibold mb-4 uppercase">Widget Banner</h3>
        <div className="bg-white p-3 rounded-xl shadow-md">
          <img src={banner} alt="Widget Banner" className="w-full rounded-lg object-cover" />
        </div>
      </div>

      {/* Tags */}
      <div>
        <h3 className="text-lg font-semibold mb-4 uppercase">Tags</h3>
        <div className="flex flex-wrap gap-3 text-sm">
          {["ecommerce", "food", "grocery", "klbtheme", "organic", "shop", "shopify", "store"].map(tag => (
            <span key={tag} className="bg-gray-100 px-4 py-2 rounded-md hover:bg-green-100 cursor-pointer">
              {tag}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
