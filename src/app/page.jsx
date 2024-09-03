// import Banner from "../components/banner/page";
import dynamic from 'next/dynamic';

const Banner = dynamic(() => import('../components/banner/page'), { ssr: false });

const Home = () => {
  return (
    <main>
      <Banner />
    </main>
  );
}

export default Home;