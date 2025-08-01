// import React, { useReducer } from 'react'
// import img1 from '../assets/Chobani.png'
// import img2 from '../assets/Frozen Foods.png'
// import img3 from '../assets/HouseholdNeeds.png'
// import { IoIosArrowForward } from "react-icons/io";
// import { MdOutlineShoppingBag } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";
// import { VscLiveShare } from "react-icons/vsc";
// import { AiOutlineTag } from "react-icons/ai";






// const PurchaseOrder = () => {
//   const initialState = {
//     cart: [],
//     readMore: false,
//     productNumber: 1,
//     selectedImg: img3, // Default selected image
//   };
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case 'ADD_TO_CART':
//         return {
//           ...state,
//           cart: [...state.cart, action.payload],
//         };
//       case 'TOGGLE_READ_MORE':
//         return {
//           ...state,
//           readMore: !state.readMore,
//         };
//       case 'INCREASE_PRODUCT_NUMBER':
//         return {
//           ...state,
//           productNumber: state.productNumber + 1,
//         };
//       case 'DECREASE_PRODUCT_NUMBER':
//         return {
//           ...state,
//           productNumber: state.productNumber > 1 ? state.productNumber - 1 : 1,
//         };
//       case 'SELECT_IMAGE':
//         return {
//           ...state,
//           selectedImg: action.payload,
//         };
//       default:
//         return state;
//     }
//   };

        
//   // const [readMore, setReadMore] = useState(false);
//   const [state , dispatch] = useReducer(reducer , initialState);
//   console.log(initialState.readMore)
//   // const toggleReadMore = () => {
//   //   setReadMore(!readMore);
//   // };
//   return (
//     <section className=' absolute top-0 left-0 right-0 z-10 p-8 bg-[#4d4d4d] h-full fixed '>

//       <div className='container mx-auto flex flex-col items-center justify-center rounded-lg shadow-lg h-full bg-white lg:h-[85vh] gap-8 p-8 overflow-y-auto'>

//       <div className='flex flex-col justify-center items-start gap-4 w-full pt-[50rem] lg:flex-row lg:pt-60 '>

//       <div className='flex flex-col-reverse items-center justify-center gap-4 mb-8 w-full lg:w-[65%] lg:flex-row'>
//         {/* sub img */}
//         <div className='flex flex-row justify-center items-start gap-4 mb-8 w-full lg:w-1/4 lg:flex-col'>

//           <figure onClick={() => dispatch({ type: 'SET_SELECTED_IMG', payload: img1 })} className='border-2 border-gray-300 p-4 rounded-md shadow-md bg-white'>
//             <img src={img1} alt="Chobani" className='w-20 h-20 object-cover' />
//           </figure>
//           <figure onClick={() => dispatch({ type: 'SET_SELECTED_IMG', payload: img2 })} className='border-2 border-gray-300 p-4 rounded-md shadow-md bg-white '>
//             <img src={img2} alt="Chobani" className='w-20 h-20 object-cover ' />
//           </figure>
//           <figure onClick={() => dispatch({ type: 'SET_SELECTED_IMG', payload: img3 })} className='border-2 border-gray-300 p-4 rounded-md shadow-md bg-white'>
//             <img src={img3} alt="Chobani" className='w-20 h-20 object-cover' />
//           </figure>

//         </div>

//         {/* main img */}
//         <div className='w-full lg:w-[70%] flex justify-center items-center border-2 border-gray-300 p-4 rounded-md shadow-md bg-[#fff] relative'>
//           <figure >
//             <img src={state.selectedImg} alt="Household Needs" className='w-full object-cover' />
//           </figure>

//           {/* arrow next */}
//           <button className='absolute top-1/2 right-2 bg-[#fff] w-7 h-7 rounded-full border-0 cursor-pointer shadow-md'>
//             <span className='flex justify-center items-center mt-0.5 ml-0.5 text-md font-[600]'>
//               <IoIosArrowForward />
//             </span>

//           </button>
//         </div>
//       </div>

//       {/* details */}

//       <div className='flex flex-col justify-center items-start gap-4 w-full lg:w-[30%] p-4'>
//         {/* title */}
//         <h2 className='text-xl font-semibold text-gray-800'>SkinnyPop Popcorn SkinnyPack Original</h2>
//         {/* <h2 clasName='text-2xl font-bold'> SkinnyPop Popcorn SkinnyPack Original </h2> */}
//         {/* price */}
//         <p className='text-2xl font-semibold'>$15.00 - $25.00</p>

//         {/* available  */}
//         <div className='flex flex-col justify-center items-start gap-2 w-full'>
//           <p className='text-[15px] font-[400] text-gray-400'>available in:</p>
//           <ul className='liststyle-none flex space-x-1.5 mt-2'>
//             <li className='text-[14px] font-[400] border-2 border-gray-400 px-2 py-1.5 rounded-md cursor-pointer'>Small</li>
//             <li className='text-[14px] font-[400] border-2 border-gray-400 px-2 py-1.5 rounded-md cursor-pointer'>Medium</li>
//             <li className='text-[14px] font-[400] border-2 border-gray-400 px-2 py-1.5 rounded-md cursor-pointer'>Large</li>
//           </ul>
//         </div>

//         {/* number of prodect */}

//         <div className='flex justify-center items-center space-x-10 mt-4 bg-[#F3F5F9] p-2 rounded-md shadow-md w-full'>
//           <button onClick={
// () => dispatch({ type: 'DECREASE_PRODUCT_NUMBER' })} className='text-2xl font-semibold border-0 cursor-pointer' disabled={state.productNumber <= 1}>-</button>

//           <p className='text-xl font-semibold'>{state.productNumber}</p>
//           <button onClick={() => dispatch({ type: 'INCREASE_PRODUCT_NUMBER' })} className='text-2xl font-semibold border-0 cursor-pointer'>+</button>
        
//         </div>

//         {/* add to cart */}
//         <button className='flex justify-center items-center space-x-2.5 bg-[#35AFA0] text-white px-6 py-2 rounded-md shadow-md hover:bg-[#35AFA18F]  cursor-pointer transition duration-300 mt-4 w-full'>
//           <span className='text-lg  font-semibold'><MdOutlineShoppingBag /></span>
//           <span className='text-lg  font-semibold'>Add to Cart</span>
//         </button>

//         {/* Wishlist and Share */}

//           <div className='flex justify-center items-center space-x-4 mt-4 w-full'>

//             <button className='w-1/2 text-[15px] font-[600] border-1 border-gray-300 cursor-pointer py-2.5  px-6 rounded-md   hover:text-gray-800 transition duration-300'>
//               <CiHeart className='inline-block mr-2 text-2xl font-[400]' />
//                Wishlist
//             </button>

//             <button className='w-1/2 text-[15px] font-[600] border-1 border-gray-300 cursor-pointer  px-6 py-2.5 rounded-md  hover:text-gray-800 transition duration-300'>
//               <VscLiveShare className='inline-block mr-2 text-2xl font-[400]'/>

//               Share
//             </button>
//         </div>

//         {/* Tags: */}
//         <div className='flex justify-start items-center gap-2 mt-4 w-full'>
//           <p className='text-[15px] font-[400] text-gray-400 flex justify-center items-center '><span><AiOutlineTag /> </span> Tags:</p>
//           <ul className='liststyle-none flex space-x-1.5 mt-2'>
//             <li className='text-[14px] font-[400] border-2 border-gray-400 px-1.5 py-1 rounded-md cursor-pointer'>Snacks</li>
//             <li className='text-[14px] font-[400] border-2 border-gray-400 px-1.5 py-1 rounded-md cursor-pointer'>Popcorn</li>
//             <li className='text-[14px] font-[400] border-2 border-gray-400 px-1.5 py-1 rounded-md cursor-pointer'>Healthy</li>
//           </ul>
//           </div>

//           {/* Product Details: */}
//           <div className='mt-4 w-full'>
//             <h3 className='text-[16px] font-semibold text-gray-800 mb-2'>Product Details:</h3>
//             <span className='text-[14px] font-[400] text-gray-600'>SkinnyPop Popcorn SkinnyPack Original is a delicious and healthy snack option. Made with all-natural ingredients, it is gluten-free, non-GMO, and contains no artificial flavors or preservatives. Perfect for on-the-go snacking or enjoying at home....</span>
//             {
//               state.readMore === false ? <button onClick={() => dispatch({ type: 'TOGGLE_READ_MORE' })}  className='text-[#35AFA0] text-[14px] font-[400] hover:underline cursor-pointer'>Read more</button> :(
//                 <>
//                 <span className='text-[14px] font-[400] text-gray-600 '>Enjoy the light and airy texture of SkinnyPop Popcorn, available in various flavors to satisfy your cravings. Whether you're watching a movie or need a quick snack, this popcorn is a guilt-free choice that everyone will love.</span>
//                   <button onClick={() => dispatch({ type: 'TOGGLE_READ_MORE' })} className='text-[#35AFA0] text-[14px] font-[400] hover:underline cursor-pointer mt-2'>Show less</button>
//                 </>
//               ) 
//             }
          
            
            
//             </div>


//       </div>


//       </div>

//       {/* Related products slider */}
//       <div className='flex flex-col justify-center items-start w-full' >
//         <h3 className='text-[22px] font-bold'>Related products</h3>
//       </div>




//       </div>
      
//     </section>
//   )
// }

// export default PurchaseOrder

import React, { useEffect, useReducer, useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { VscLiveShare } from "react-icons/vsc";
import { AiOutlineTag } from "react-icons/ai";
import { useParams } from 'react-router-dom';
// import ProductSlider from '../components/RelatedPorduct';
import { IoClose } from "react-icons/io5";


const initialState = {
  cart: [],
  readMore: false,
  productNumber: 1,
  selectedImg: '',
  imageIndex: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'TOGGLE_READ_MORE':
      return { ...state, readMore: !state.readMore };
    case 'INCREASE_PRODUCT_NUMBER':
      return { ...state, productNumber: state.productNumber + 1 };
    case 'DECREASE_PRODUCT_NUMBER':
      return { ...state, productNumber: Math.max(1, state.productNumber - 1) };
    case 'SET_SELECTED_IMG':
      return {
        ...state,
        selectedImg: action.payload,
        imageIndex: action.index,
      };
    case 'NEXT_IMAGE':
      const nextIndex = (state.imageIndex + 1) % action.images.length;
      return {
        ...state,
        selectedImg: action.images[nextIndex],
        imageIndex: nextIndex,
      };
    default:
      return state;
  }
};

const PurchaseOrder = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (id) {
      fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
          setProduct(data);
          if (data?.images?.length > 0) {
            dispatch({ type: 'SET_SELECTED_IMG', payload: data.images[0], index: 0 });
          }
        })
        .catch(err => console.error('Failed to fetch product:', err));
    }
  }, [id]);

  if (!product) {
    return <div className="text-center py-20 text-gray-500">Loading product...</div>;
  }

  return (
    <section className='top-0 left-0 right-0 z-10 p-8 bg-[#4d4d4d] h-full fixed'>
      <div className='container mx-auto flex flex-col items-center justify-center rounded-lg shadow-lg h-full bg-white lg:h-[85vh] gap-8 p-8 overflow-y-auto relative'>
        {/* close btn */}
        <button
          onClick={() => window.history.back()}
          className='absolute text-2xl top-5 left-5 text-red hover:text-gray-800 transition duration-300 cursor-pointer'
        >
          <IoClose />

        </button>
        <div className='flex flex-col justify-center items-start gap-4 w-full pt-[70rem] lg:flex-row lg:pt-[30rem]'>

          {/* Image Section */}
          <div className='flex flex-col-reverse items-center justify-center gap-4 mb-8 w-full lg:w-[65%] lg:flex-row'>
            <div className='flex flex-row justify-center items-start gap-4 mb-8 w-full lg:w-1/4 lg:flex-col'>
              {product.images?.map((img, idx) => (
                <figure
                  key={idx}
                  onClick={() => dispatch({ type: 'SET_SELECTED_IMG', payload: img, index: idx })}
                  className='border-2 border-gray-300 p-4 rounded-md shadow-md bg-white cursor-pointer'
                >
                  <img src={img} alt={`Preview ${idx}`} className='w-20 h-20 object-cover' loading='lazy' />
                </figure>
              ))}
            </div>

            {/* Main Image */}
            <div className='w-full lg:w-[70%] flex justify-center items-center border-2 border-gray-300 p-4 rounded-md shadow-md bg-white relative'>
              <figure>
                <img src={state.selectedImg} alt="Selected Product" className='w-full object-cover' loading='lazy' />
              </figure>
              <button
                onClick={() => dispatch({ type: 'NEXT_IMAGE', images: product.images })}
                className='absolute top-1/2 right-2 bg-white w-7 h-7 rounded-full border-0 cursor-pointer shadow-md'
              >
                <span className='flex justify-center items-center mt-0.5 ml-0.5 text-md font-semibold'>
                  <IoIosArrowForward />
                </span>
              </button>
            </div>
          </div>

          {/* Product Details */}
          <div className='flex flex-col justify-center items-start gap-4 w-full lg:w-[30%] p-4'>
            <h2 className='text-xl font-semibold text-gray-800'>{product.title}</h2>
            <p className='text-2xl font-semibold'>${product.price}</p>

            <p className='text-sm text-gray-500'>{product.brand}</p>
            <p className='text-xs text-[#00B853] uppercase'>In stock</p>

            {/* Quantity Selector */}
            <div className='flex justify-center items-center space-x-10 mt-4 bg-[#F3F5F9] p-2 rounded-md shadow-md w-full'>
              <button
                onClick={() => dispatch({ type: 'DECREASE_PRODUCT_NUMBER' })}
                className='text-2xl font-semibold border-0 cursor-pointer'
              >-</button>
              <p className='text-xl font-semibold'>{state.productNumber}</p>
              <button
                onClick={() => dispatch({ type: 'INCREASE_PRODUCT_NUMBER' })}
                className='text-2xl font-semibold border-0 cursor-pointer'
              >+</button>
            </div>

            {/* Add to Cart */}
            <button className='flex justify-center items-center space-x-2 bg-[#35AFA0] text-white px-6 py-2 rounded-md shadow-md hover:bg-[#35AFA18F] transition duration-300 mt-4 w-full cursor-pointer'>
              <MdOutlineShoppingBag className='text-lg' />
              <span className='text-lg font-semibold'>Add to Cart</span>
            </button>

            {/* Wishlist / Share */}
            <div className='flex space-x-4 mt-4 w-full'>
              <button className='w-1/2 text-sm font-semibold border border-gray-300 py-2.5 rounded-md hover:text-gray-800 cursor-pointer'>
                <CiHeart className='inline-block mr-2 text-2xl' /> Wishlist
              </button>
              <button className='w-1/2 text-sm font-semibold border border-gray-300 py-2.5 rounded-md hover:text-gray-800 cursor-pointer'>
                <VscLiveShare className='inline-block mr-2 text-2xl' /> Share
              </button>
            </div>

            {/* Tags */}
            <div className='flex items-center gap-2 mt-4 w-full'>
              <p className='text-sm text-gray-400 flex items-center'><AiOutlineTag /> Tags:</p>
              <ul className='flex space-x-1.5 mt-1'>
                <li className='text-xs border-2 border-gray-400 px-2 py-1 rounded-md cursor-pointer'>{product.category}</li>
              </ul>
            </div>

            {/* Product Description */}
            <div className='mt-4 w-full'>
              <h3 className='text-base font-semibold text-gray-800 mb-2'>Product Details:</h3>
              <span className='text-sm text-gray-600'>
                {product.description.slice(0, 120)}
              </span>
              {!state.readMore ? (
                <button
                  onClick={() => dispatch({ type: 'TOGGLE_READ_MORE' })}
                  className='text-[#35AFA0] text-sm font-medium hover:underline mt-1 cursor-pointer'
                >Read more</button>
              ) : (
                <>
                  <span className='text-sm text-gray-600 mt-1'>
                    {product.description}
                  </span>
                  <button
                    onClick={() => dispatch({ type: 'TOGGLE_READ_MORE' })}
                    className='text-[#35AFA0] text-sm font-medium hover:underline mt-1 cursor-pointer'
                  >Show less</button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className='flex flex-col justify-center items-start w-full mt-8'>
          <h3 className='text-xl font-bold'>Related products</h3>
          {/* <ProductSlider /> */}
        </div>
      </div>
    </section>
  );
};

export default PurchaseOrder;
