import React from 'react'

const Blog = ({title, category, date, imgSrc }) => {
  return (
    <div div className='   items-center max-w-[380px] w-full  text-white '>
    <div
      className="rounded-lg shadow-md   max-w-[380px] w-full h-56  bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
   
    </div>

 
<div className="relative py-4 ">
  <p className="text-gray-400   font-medium uppercase tracking-wide text-sm">
    {category}
  </p>
  <h2 className="mt-1 font-bold text-black text-l leading-tight">
    {title}
  </h2>
  <p className="mt-2 text-gray-400 font-medium text-sm">{date}</p>
  
</div>

</div>
  );
};

export default Blog;
