import React from 'react'
import { banner4,banner5,banner6 } from '../assets';

 
import Blog from './blog';
function BlogSection() {
  return (
    <div className="flex   justify-center gap-6 flex-wrap p-6 mx-auto">
      <Blog
        category="Grocery"
        title="But I must explain to you how all this
        mistaken idea"
        date="Jan 13 2025"
         imgSrc={banner4}
      />
      <Blog
        category="Grocery"
        title="The Problem With Typefaces on the
        Web"
        date="Jan 13 2025"
         imgSrc={banner5}      />
      <Blog
        category="Grocery"
        title="English Breakfast Tea With Tasty
        Donut Desserts"
        date="Jan 13 2025"
         imgSrc={banner6}      />
    </div>
  );
}

export default BlogSection;

