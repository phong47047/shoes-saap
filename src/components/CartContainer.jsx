import React from 'react';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { RiRefreshFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { BiMinus, BiPlus } from 'react-icons/bi';

const CartContainer = () => {
  return (
    <div
      className="fixed top-0 right-0 w-full md:w-375 h-[100vh] bg-white drop-shadow-md flex
  flex-col z-[101]"
    >
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div whileTap={{ scale: 0.75 }}>
          <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
        </motion.div>
        <p className="text-textColor text-lg font-semibold">Cart</p>
        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md
          hover:shadow-md cursor-pointer text-textColor 
          text-base
          "
        >
          Clear <RiRefreshFill />
        </motion.p>
      </div>
      {/* bottom section */}
      <div className="w-full h-full bg-cardBg rounded-t-[2rem] flex flex-col">
        {/* cart items section */}
        <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
          {/* cart item */}
          <div className="w-full p-1 px-2 rounded-lg bg-cardItem flex items-center gap-2">
            <img
              src=""
              className="w-20 h-20 max-w-[60px] rounded-full object-contain"
              alt=""
            />
            {/* name section */}
            <div className="flex flex-col gap-2">
              <p className="text-base text-gray-50">Chocolate vanilla</p>
              <p className="text-sm block text-gray-300 font-semibold">$8.5</p>
            </div>
            {/* button section */}
            <div className="group flex items-center gap-2 ml-auto cursor-pointer">
              <motion.div whileTap={{ scale: 0.75 }}>
                <BiMinus className="text-gray-50" />
              </motion.div>
              <p className="w-5 h-5 rounded-sm bg-cardBg text-gray-50 flex items-center justify-center">
                1
              </p>
              <motion.div whileTap={{ scale: 0.75 }}>
                <BiPlus className="text-gray-50" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* cart total section */}
        <div className="w-full flex-1 bg-cardTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-400 text-lg">Sub Total</p>
            <p className="text-gray-400 text-lg">$9.5</p>
          </div>
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-400 text-lg">Delivery</p>
            <p className="text-gray-400 text-lg">$2.5</p>
          </div>

          <div className="w-full border-b border-gray-600 my-2"></div>

          <div className="w-full flex items-center justify-between">
            <p className="text-gray-200 text-lg font-semibold">Total</p>
            <p className="text-gray-200 text-lg font-semibold">$12</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
