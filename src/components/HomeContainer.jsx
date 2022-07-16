import React from 'react';
import Delivery from '../img/delivery.png';
import HeroBg from '../img/heroBg.png';

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="Home">
      <div className="py-2 flex-1 flex flex-col items-start  justify-center gap-6">
        <div className=" flex items-center gap-2 justify-center bg-gray-300 px-4 py-1 rounded-full">
          <p className="text-base text-orange-600 font-semibold">Shoes Sapp</p>
          <div className="w-6 h-6 rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <p className="text-[2.5rem] md:text-[4.25rem] font-bold tracking-wide text-headingColor">
          Chúng Tôi có Các Loại Giày mà
          <span className="text-orange-700 text-[3rem] md:text-[5rem]">
            Bạn Thích
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:text-[80%]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          corporis voluptatem deserunt at repudiandae debitis, similique eius
          voluptatibus ab nesciunt non ea, praesentium, provident culpa!
          Aspernatur delectus atque ut voluptates.
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-rose-500 w-full md:w-auto
    px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center">
        <img
          src={HeroBg}
          className="ml-auto h-420 w-full lg:w-auto lg:h-650 "
          alt="hero-bg"
        />
        <div className="w-full h-full absolute flex items-center justify-center"></div>
      </div>
    </section>
  );
};

export default HomeContainer;
