import { Link, useLocation } from 'react-router-dom'

const Pagination = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getPageStyle = (pagePath) => {
    const isActive = currentPath === pagePath;
    return isActive 
      ? "px-3 py-1 bg-green-600 text-white rounded font-semibold" 
      : "px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-green-500 hover:text-white transition-colors";
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      <Link to="/blog1" className={getPageStyle('/blog1')}>1</Link>
      <Link to="/blog2" className={getPageStyle('/blog2')}>2</Link>
    </div>
  )
}

export default Pagination
