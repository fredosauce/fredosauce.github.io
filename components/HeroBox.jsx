import { useState, useEffect } from 'react';

const HeroBox = ({ coins }) => {
  console.log('coins in herobox: ', coins);
  return (
    <div class='mt-6 custom-wrapper-2 mx-auto py-3 font-strong-sans'>
      {/* <h2 class='mb-4 font-light'>STATE OF CRYPTO</h2> */}
      <ul class='flex flex-row divide-x-4 divide-white'>
        {coins.map((coin) => (
          <li class='flex-grow flex flex-col border-box bg-gray-200 p-3 font-stats-sans rounded'>
            <h1 class='font-semibold text-center tracking-widest'>
              {coin.symbol.toUpperCase()}
            </h1>
            <div class='p-6 flex-grow flex items-center'>
              <img class='' src={coin.image} />
            </div>

            <h1 class='text-center'>
              {'$' + coin['current_price'].toString()}
            </h1>
            <h1
              class={`text-center mt-2 font-semibold ${
                coin['price_change_percentage_24h'] > 0
                  ? 'text-green-400'
                  : 'text-red-400'
              }`}
            >
              {coin['price_change_percentage_24h'].toFixed(2) + '%'}
            </h1>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroBox;
