import React, { ReactElement, useEffect, useState } from "react";
import {
  BoxALignCenter_Justify_ItemsEnd,
  BoxALignCenter_Justify_ItemsStart,
} from "@styles/styled-components/styledBox";
// import { BannerLeft, BannerRight, BannerMain } from "@components/banner";
import { NEXT_PUBLIC_GOOGLE_ANALYTICS } from "@config/index";
import dynamic from "next/dynamic";
import request from "@services/apiService";
import Head from "next/head";
import * as qs from "qs";
import "antd/dist/antd.css";
import { useRouter } from "next/router";

export default function LayoutGlobal(props: any): ReactElement {
  // const FooterHome = dynamic(() => import("./FooterHome"));
  const NavbarHome = dynamic(() =>
    import("../navbar").then((mod: any) => mod.NavbarHome)
  ) as any;
  const FooterHome = dynamic(() =>
    import("../footer").then((mod: any) => mod.FooterHome)
  ) as any;
  const router = useRouter();
  const route = router.asPath.split("/");
  const isDappNews = route[1].slice(0, 9) == "dapp-news";
  const isDappPortal = route[1].slice(0, 3) == "app";
  const isDappNewsDetails =
    route[1].slice(0, 9) == "dapp-news" && route[1].slice(9, 10) == "/";
  const [banners, setBanners] = useState<any>([]);
  useEffect(() => {
    (async () => {
      const bannerQuery = qs.stringify(
        {
          populate: "*",
        },
        {
          encodeValuesOnly: true,
          // encode: false,
        }
      );
      await request.get(`/ads-banners?${bannerQuery}`).then((res) => {
        setBanners(res.data.data.map((img: any) => img.attributes));
      });
    })();
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0"
        />
        <title>Tweetstock</title>
      </Head>
      <NavbarHome />
      {(
        <>
        <div style={{paddingTop: '72px'}}>{props.children}</div>
        <div className="row-global pb-5 m-0 h-100">
          {/* <div className="main-background main-background-position-banner" /> */}
          {/* <div className="main-background main-background-position-priceboard" /> */}
          {/* <div className="main-background main-background-position-highestsocial" /> */}
          {/* <div className="main-background main-background-position-blog" /> */}
        </div>
        </>
      )}
      <FooterHome />
    </>
  );
}
