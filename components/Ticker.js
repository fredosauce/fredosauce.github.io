import { useState, useEffect } from 'react';

const Ticker = () => {
  const [tickerText, setTickerText] = useState('SANDBOX 42 • LA •');

  const tickerArray = [0, 1, 2, 3].map((x) => {
    return (
      <h1
        class={`-translate-x-full transition tracking-widest text-4xl font-bold text-gray-100 p-4 inline-block absolute z-0 ${
          'animate-scrollXFull-' + x * 1500
        }`}
      >
        {tickerText}
      </h1>
    );
  });

  return (
    <div class='mx-auto border-b-4 border-gray-400 bg-gray-900 h-20'>
      {tickerArray}
      <h1 class='text-3xl font-bold inline-block text-gray-100 border-l-4 border-gray-400 float-right py-5 px-3 bg-gray-900 z-10 relative'>
        &nbsp;THU FEB 18 2021&nbsp;
      </h1>
    </div>
  );
};

export default Ticker;
