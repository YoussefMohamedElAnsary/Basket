import React, { useEffect, useReducer, useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { VscLiveShare } from "react-icons/vsc";
import { AiOutlineTag } from "react-icons/ai";
import { useParams, useNavigate } from 'react-router-dom';
import ProductSlider from '../components/RelatedPorduct';
import { IoClose } from "react-icons/io5";
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';


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
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { id } = useParams();
  const { currentUser } = useAuth();
  const { addToCart, getCartItemQuantity } = useCart();
  const navigate = useNavigate();

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

        {/* View Cart Button */}
        {currentUser && (
          <button
            onClick={() => navigate('/checkout')}
            className='absolute text-sm top-5 right-5 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 cursor-pointer'
          >
            Go to Checkout
          </button>
        )}
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
            <button 
              onClick={async () => {
                if (!currentUser) {
                  alert('Please sign in to add items to cart');
                  navigate('/signin');
                  return;
                }
                
                setIsAddingToCart(true);
                try {
                  await addToCart({
                    id: product.id,
                    name: product.title,
                    price: product.price,
                    image: product.images[0],
                    quantity: state.productNumber
                  });
                  setShowSuccess(true);
                  setTimeout(() => setShowSuccess(false), 2000);
                } catch (error) {
                  console.error('Error adding to cart:', error);
                  alert('Failed to add item to cart');
                } finally {
                  setIsAddingToCart(false);
                }
              }}
              disabled={isAddingToCart}
              className={`flex justify-center items-center space-x-2 px-6 py-2 rounded-md shadow-md transition duration-300 mt-4 w-full cursor-pointer ${
                isAddingToCart 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-[#35AFA0] text-white hover:bg-[#35AFA18F]'
              }`}
            >
              <MdOutlineShoppingBag className='text-lg' />
              <span className='text-lg font-semibold'>
                {isAddingToCart ? 'Adding...' : 'Add to Cart'}
              </span>
            </button>

            {/* Success Message */}
            {showSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mt-2">
                ✓ Added to cart successfully!
              </div>
            )}

            {/* Current Cart Quantity */}
            {currentUser && getCartItemQuantity(product.id) > 0 && (
              <div className="text-sm text-gray-600 mt-2">
                In cart: {getCartItemQuantity(product.id)} items
              </div>
            )}

            {/* Wishlist / Share */}
            <div className='flex space-x-4 mt-4 w-full'>
              <button 
                onClick={() => {
                  if (!currentUser) {
                    alert('Please sign in to add items to wishlist');
                    navigate('/signin');
                    return;
                  }
                  alert('Wishlist feature coming soon!');
                }}
                className='w-1/2 text-sm font-semibold border border-gray-300 py-2.5 rounded-md hover:text-gray-800 cursor-pointer transition-colors'
              >
                <CiHeart className='inline-block mr-2 text-2xl' /> Wishlist
              </button>
                             <button 
                 onClick={() => {
                   alert('Share feature coming soon!');
                 }}
                 className='w-1/2 text-sm font-semibold border border-gray-300 py-2.5 rounded-md hover:text-gray-800 cursor-pointer transition-colors'
               >
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
          <ProductSlider />
        </div>
      </div>
    </section>
  );
};

export default PurchaseOrder;
