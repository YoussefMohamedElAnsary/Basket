// import React, { useEffect, useState } from 'react';
// import Chobani from '../assets/Chobani.png';
// import ProdectCard from '../UI/ProdectCard';

// const Prodect = () => {
//   const [hour, setHour] = useState(70);
//   const [minute, setMinute] = useState(14);
//   const [second, setSecond] = useState(41);
//   const [millisecond, setMillisecond] = useState(11);
//     const [products, setProducts] = useState([]);
  

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setMillisecond((prevMs) => {
//         if (hour === 0 && minute === 0 && second === 0 && prevMs === 0) {
//           clearInterval(timer);
//           return 0;
//         }

//         if (prevMs > 0) {
//           return prevMs - 1;
//         } else {
//           setMillisecond(99);
//           setSecond((prevSec) => {
//             if (prevSec > 0) {
//               return prevSec - 1;
//             } else {
//               setSecond(59);
//               setMinute((prevMin) => {
//                 if (prevMin > 0) {
//                   return prevMin - 1;
//                 } else {
//                   setMinute(59);
//                   setHour((prevHour) => (prevHour > 0 ? prevHour - 1 : 0));
//                   return 59;
//                 }
//               });
//               return 59;
//             }
//           });
//           return 99;
//         }
//       });
//     }, 10);


//     return () => clearInterval(timer);
//   }, [hour, minute, second]);
  

//   return (
//     <section className="container mx-auto my-10 px-4 flex flex-col lg:flex-row gap-6">
//       {/* Deals of the Week */}
//       <div className="flex flex-col border-2 border-[#ED174A] p-6 w-full lg:w-[330px] h-[700px] cursor-pointer rounded-md">
//         <p className="text-[20px] mb-4">
//           Deals of the <span className="font-bold">week!</span>
//         </p>

//         {/* Timer */}
//         <div className="flex justify-center lg:justify-start items-center space-x-4 mb-6">
//           <span className="text-[20px] text-white font-semibold bg-[#ED174A] rounded-md py-2 px-3">{hour}</span>
//           <span className="text-lg font-semibold">:</span>
//           <span className="text-[20px] text-white font-semibold bg-[#ED174A] rounded-md py-2 px-3">{minute}</span>
//           <span className="text-lg font-semibold">:</span>
//           <span className="text-[20px] text-white font-semibold bg-[#ED174A] rounded-md py-2 px-3">{second}</span>
//         </div>
//         <p className="text-[12px] text-[#C2C2D3]">Remains until the end of the offer</p>

//         {/* Product Image & Discount */}
//         <div className="flex justify-center items-center relative mt-6">
//           <img src={Chobani} alt="Chobani" className="w-48 h-48 sm:w-60 sm:h-60 object-cover" />
//           <div className="w-[45px] h-[45px] bg-[#ED174A] text-white text-center p-2 rounded-full absolute top-3 left-3">
//             <p className="font-semibold text-[18px]">18%</p>
//           </div>
//         </div>

//         {/* Price */}
//         <div className="flex justify-center items-center space-x-1.5 mt-4">
//           <p className="line-through text-gray-500 text-[18.4px] font-[600]">$5.49</p>
//           <p className="text-[#ED174A] text-[19px] font-[600]">$4.49</p>
//         </div>

//         {/* Product Title */}
//         <h3 className="text-[18px] font-[500] my-2">Chobani Complete Vanilla Greek Yogurt</h3>
//         <p className="text-[11px] text-[#00B853] font-[600]">79 in stock</p>

//         {/* Rating */}
//         <div className="flex space-x-1.5 mt-2">
//           <span className="text-[#FFCD00] text-[14px] font-[600]">★ ★ ★ ★ ☆</span>
//           <span className="text-[#71778E] text-[13px] font-[600]">1 review</span>
//         </div>

//         {/* Stock & Progress Bar */}
//         <div className="flex justify-end items-center w-full mt-4">
//           <p className="text-[12px] uppercase text-[#C2C2D3] text-end">
//             Available: <span className="text-[16px] font-semibold text-[#233A95]">79</span>
//           </p>
//         </div>

//         <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
//           <div className="bg-gradient-to-r from-[#D51243] to-[#FFCD00] h-2.5 rounded-full" style={{ width: '79%' }}></div>
//         </div>
//       </div>

//       {/* Product List */}
//       {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full"> */}
//         <ProdectCard />
//         {/* <ProdectCard />
//         <ProdectCard />
//         <ProdectCard />
//         <ProdectCard />
//         <ProdectCard /> */}
//       {/* </div> */}
//     </section>
//   );
// };

// export default Prodect;


import React, { useEffect, useState } from 'react';
import ProdectCard from '../UI/ProdectCard';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const [hour, setHour] = useState(70);
  const [minute, setMinute] = useState(14);
  const [second, setSecond] = useState(41);
  const [millisecond, setMillisecond] = useState(11);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setMillisecond((prevMs) => {
        if (hour === 0 && minute === 0 && second === 0 && prevMs === 0) {
          clearInterval(timer);
          return 0;
        }

        if (prevMs > 0) {
          return prevMs - 1;
        } else {
          setMillisecond(99);
          setSecond((prevSec) => {
            if (prevSec > 0) {
              return prevSec - 1;
            } else {
              setSecond(59);
              setMinute((prevMin) => {
                if (prevMin > 0) {
                  return prevMin - 1;
                } else {
                  setMinute(59);
                  setHour((prevHour) => (prevHour > 0 ? prevHour - 1 : 0));
                  return 59;
                }
              });
              return 59;
            }
          });
          return 99;
        }
      });
    }, 10);

    return () => clearInterval(timer);
  }, [hour, minute, second]);

  // Fetch products
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products?.slice(8, 9) || []))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  return (
    <section className="container mx-auto my-6 px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-42 flex flex-col justify-start lg:flex-row gap-4 sm:gap-6">
      {/* Deals of the Week */}
      {products.map((item) => (
  <div
    key={item.id}
    onClick={() => navigate(`/prodect/${item.id}`)}
    className="flex flex-col border-2 border-[#ED174A] p-3 sm:p-4 md:p-6 w-full sm:w-auto lg:w-[330px] rounded-md cursor-pointer"
  >
    <p className="text-lg sm:text-xl mb-3 sm:mb-4">
      Deals of the <span className="font-bold">week!</span>
    </p>

    {/* Timer */}
    <div className="flex justify-start items-center space-x-1 sm:space-x-2 mb-3 sm:mb-4">
      {[hour, minute, second].map((unit, i) => (
        <React.Fragment key={i}>
          <span className="text-xs sm:text-sm text-white font-semibold bg-[#ED174A] rounded-md py-1 px-2 sm:px-3">
            {String(unit).padStart(2, '0')}
          </span>
          {i < 2 && <span className="text-sm sm:text-base font-semibold">:</span>}
        </React.Fragment>
      ))}
    </div>

    <p className="text-xs text-[#C2C2D3] mb-4">
      Remains until the end of the offer
    </p>

    {/* Image */}
    <div className="relative mb-3 sm:mb-4">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-full h-[140px] sm:h-[160px] md:h-[180px] object-cover mb-2 sm:mb-3 rounded-md"
        loading="lazy"
      />
      <div className="absolute top-2 left-2 bg-[#ED174A] text-white text-[9px] sm:text-[10px] md:text-[11px] font-[600] px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 md:py-2 rounded-full z-10">
        {item.discountPercentage > 0
          ? `${item.discountPercentage.toFixed(0)}%`
          : 'No Discount'}
      </div>
    </div>

    {/* Pricing */}
    <div className="flex items-center space-x-1 sm:space-x-2 mb-2">
      <p className="line-through text-gray-500 text-xs sm:text-sm md:text-[16px] font-semibold">
        ${(item.price * (1 + (item.discountPercentage || 0) / 100)).toFixed(2)}
      </p>
      <p className="text-[#ED174A] text-sm sm:text-base md:text-[18px] font-semibold">${item.price}</p>
    </div>

    <p className="text-sm sm:text-base font-semibold mb-1 line-clamp-2">{item.title}</p>
    <p className="text-[9px] sm:text-[10px] md:text-[11px] uppercase text-[#00B853]">In stock</p>

    {/* Rating */}
    <div className="flex items-center space-x-1 mt-2">
      <span className="text-[#FFCD00] text-xs sm:text-sm md:text-[14px] font-semibold">
        {'★'.repeat(Math.floor(item.rating || 0)) +
          '☆'.repeat(5 - Math.floor(item.rating || 0))}
      </span>
      <span className="text-[#71778E] text-[10px] sm:text-xs md:text-[13px] font-semibold">
        {item.rating ? '1 review' : 'No reviews'}
      </span>
    </div>

    {/* Availability */}
    <div className="flex justify-end items-center w-full mt-3 sm:mt-4">
      <p className="text-[10px] sm:text-xs uppercase text-[#C2C2D3] text-end">
        Available:{' '}
        <span className="text-[10px] sm:text-xs font-semibold text-[#233A95]">79</span>
      </p>
    </div>

    {/* Stock bar */}
    <div className="w-full bg-gray-200 rounded-full h-2 mt-3 sm:mt-4">
      <div
        className="bg-gradient-to-r from-[#D51243] to-[#FFCD00] h-2 rounded-full"
        style={{ width: '79%' }}
      ></div>
    </div>
  </div>
))}


      {/* Main Product List */}
      <ProdectCard  />
    </section>
  );
};

export default Product;

