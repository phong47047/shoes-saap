import React from 'react';
import { heroData } from '~/utils/data';
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
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className="m-auto h-420 w-full lg:w-[700px] lg:h-650"
          alt="hero-bg"
        />
        <div className=" w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 py-4 gap-6 flex-wrap ">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="lg:w-190 lg:mx-11 p-4  bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg "
              >
                <img
                  src={n.imageSrc}
                  className="w-[100px] md:w-40 -mt-10 md:-mt-20"
                  alt="S1"
                />
                <p className="text-base lg:text-lg font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>
                <p className="text-[16px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {n.decp}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$</span>
                  {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
