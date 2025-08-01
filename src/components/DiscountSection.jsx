 
import axios from 'axios';
import React, { useEffect, useState } from 'react';
 

 
  
function   DiscountSection() {
    const [products, setProducts] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage =8;
  
    useEffect(() => {
      axios.get('https://dummyjson.com/products')
        .then(res => setProducts(res.data.products))
        .catch(err => console.error('Error fetching data:', err));
    }, []);
  
   
  
    const visibleProducts = products.slice(0, 0 + itemsPerPage);
  return (
    <div class="px-[210px] mx-auto  grid grid-cols-5 gap-0 rounded-sm ">
        {visibleProducts.map((product) => (
             <div key={product.id} class="max-w-xs w-full border rounded-sm border-gray-200 p-4 relative font-sans bg-white">
    
             <div class="absolute top-4 left-4 bg-teal-500 text-white text-xs font-semibold rounded-md px-3 py-1 select-none">
               22%
             </div>
         
              
             <div class="flex justify-center mb-2">
               <img
                 src= {product.thumbnail}
                 alt="Red package of All Natural Italian-Style Chicken Meatballs against white background"
                 class="w-36 h-36 object-contain"
                 onerror="this.onerror=null;this.src='https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dd09e1f6-993a-458a-a6e1-37f05cf64cd5.png';"
               />
             </div>
         
           
             <h2 class="text-gray-900 text-sm font-medium leading-snug mb-1">
             {product.title}
             </h2>
         
          
             <p class="text-green-600 text-xs font-semibold mb-3 tracking-wide select-none">{product.availabilityStatus}</p>
         
            
             <div class="flex items-center space-x-2 mb-4">
               <div class="flex space-x-1 text-yellow-400" aria-label="4 out of 5 star rating">
                 <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.562-.955L10 0l2.948 5.955 6.561.955-4.755 4.635 1.124 6.545z"/></svg>
                 <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.562-.955L10 0l2.948 5.955 6.561.955-4.755 4.635 1.124 6.545z"/></svg>
                 <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.562-.955L10 0l2.948 5.955 6.561.955-4.755 4.635 1.124 6.545z"/></svg>
                 <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.562-.955L10 0l2.948 5.955 6.561.955-4.755 4.635 1.124 6.545z"/></svg>
                 <svg class="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.562-.955L10 0l2.948 5.955 6.561.955-4.755 4.635 1.124 6.545z"/></svg>
               </div>
               <a href="#" class="text-sm text-slate-600 hover:underline select-none">{product.rating}</a>
             </div>
         
            
             <div class="mb-6">
               <span class="line-through text-gray-400 text-sm mr-2 select-none"> ${(product.price + product.price * product.discountPercentage / 100).toFixed(2)}</span>
               <span class="text-xl font-bold text-rose-600 select-none"> ${product.price}</span>
             </div>
          
           </div>
        ))}
    


    

     
  
  </div>
  )
}
 
 
 
export default DiscountSection