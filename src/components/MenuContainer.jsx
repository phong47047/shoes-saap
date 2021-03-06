import React, { useState } from 'react';
import { useEffect } from 'react';
import { GiSonicShoes } from 'react-icons/gi';
import { categories } from '~/utils/data';
import { motion } from 'framer-motion';
import { useStateValue } from '~/context/StateProvider';
import { RowContainer } from '.';

const MenuContainer = () => {
  const [filter, setFilter] = useState('Sneaker');
  const [{ shoesItems }, dispatch] = useStateValue();

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
        <div
          className="w-full flex items-center justify-start lg:justify-center 
        gap-8 py-6 overflow-x-scroll scrollbar-none"
        >
          {categories &&
            categories.map((category) => (
              <motion.div
                whileTap={{ scale: 0.75 }}
                key={category.id}
                className={`group ${
                  filter === category.urlParamName ? 'bg-gray-700' : 'bg-card'
                } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg
                drop-shadow-xl flex flex-col gap-3 hover:bg-gray-700 items-center justify-center `}
                onClick={() => setFilter(category.urlParamName)}
              >
                <div
                  className={`w-10 h-10 rounded-full shadow-lg ${
                    filter === category.urlParamName ? 'bg-card' : 'bg-gray-700'
                  } group-hover:bg-white flex items-center justify-center`}
                >
                  <GiSonicShoes
                    className={`${
                      filter === category.urlParamName
                        ? 'text-textColor'
                        : 'text-white'
                    } group-hover:text-gray-700 text-lg`}
                  />
                </div>
                <p
                  className={`text-sm ${
                    filter === category.urlParamName
                      ? 'text-card'
                      : 'text-textColor'
                  } text-textColor group-hover:text-card`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>
        <div className="w-full">
          <RowContainer
            flag={false}
            data={shoesItems?.filter((n) => n.category == filter)}
          />
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
