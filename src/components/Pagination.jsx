import { Link } from 'react-router-dom'

const Pagination = () => {
  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      <Link to="/blog1" className="px-3 py-1 bg-green-600 text-white rounded">1</Link>
      <Link to="/blog2" className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-green-500 hover:text-white">2</Link>
    </div>
  )
}

export default Pagination
