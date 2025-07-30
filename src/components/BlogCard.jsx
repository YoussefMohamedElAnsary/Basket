const BlogCard = ({ image, title, description, category, date, author }) => {
  return (
    <div className="mb-10">
      <img src={image} alt={title} className="rounded-lg w-full" />
      <p className="mt-4 text-xs text-gray-500 uppercase">{category}</p>
      <h2 className="text-2xl font-bold text-gray-800 mt-2 leading-snug">{title}</h2>
      <p className="text-sm text-gray-600 mt-1">
        {date} · <span className="font-medium">{author}</span>
      </p>
      <p className="text-sm text-gray-700 mt-2">{description}</p>
    </div>
  );
};

export default BlogCard;

