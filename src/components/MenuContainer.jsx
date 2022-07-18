import React from 'react';

const MenuContainer = () => {
  return (
    <section className="w-full my-6" id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <p
          className="text-2xl font-semibold capitalize text-headingColor relative
          before:absolute before:rounded-lg before:content before:w-32 before:h-1
          before:-bottom-4 before:left-0 before:bg-gradient-to-tr from-orange-400
           to-orange-600 transition-all ease-in-out duration-100 mr-auto"
        >
          Giày Tốt của chúng tôi
        </p>
      </div>
    </section>
  );
};

export default MenuContainer;
