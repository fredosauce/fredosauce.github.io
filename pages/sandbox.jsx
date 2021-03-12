import Ticker from '../components/Ticker';
import HeroBox from '../components/HeroBox';

const Sandbox = ({ data }) => {
  return (
    <>
      <Ticker>
        <h1 class='text-3xl'>SANDBOX 42</h1>
      </Ticker>
      <HeroBox coins={data}></HeroBox>
    </>
  );
};

export async function getServerSideProps() {
  const url = new URL('https://api.coingecko.com/api/v3/coins/markets');
  let params = { vs_currency: 'usd', per_page: 6 };
  url.search = new URLSearchParams(params).toString();

  const res = await fetch(url.href);
  console.log(url);

  let data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default Sandbox;
