import React from 'react'

const ItemCardCheckout = ({img, title, price, quantity}) => {
  return (
    <div>
      <div className='flex flex-row gap-2 relative'>
        <img src={img} className='w-[64px] border-1 border-gray-400 rounded-md' />
        <div className='absolute -top-2 left-12 bg-[#666666] z-20 rounded-[50%] w-[22px] h-[22px] text-center text-sm text-white'>
            {quantity}
        </div>
        <div className='flex flex-row items-center justify-between w-80 px-4 text-black text-l'>
            <span className=''>{title}</span>
            <span className=''>${price}</span>
        </div>
      </div>
    </div>
  )
}

export default ItemCardCheckout
