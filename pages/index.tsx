import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const Home: NextPage = () => {
  const Header = dynamic(() => import("@components/main/home").then((mod: any) => mod.Header)) as any;
  const StockChart = dynamic(() => import("@components/main/home").then((mod: any) => mod.StockChart)) as any;
  const HighestSocial = dynamic(() => import("@components/main/home").then((mod: any) => mod.HighestSocial)) as any;
  const Tweet = dynamic(() => import("@components/main/home").then((mod: any) => mod.Tweet)) as any;
  // const SocialNetwork = dynamic(() => import("@components/main/home").then((mod: any) => mod.SocialNetwork)) as any;

  return (
    <>
      <Header/>
      <StockChart/>
      <HighestSocial />
      <Tweet />
      {/* <SocialNetwork /> */}
    </>
  )
}

export default Home
