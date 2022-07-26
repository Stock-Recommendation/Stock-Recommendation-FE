import React, { ReactElement } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "react-feather";
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  BoxALignCenter_Justify_ItemsCenter, CategoryUnbox,
} from "styles/styled-components/styledBox";
import { Button } from "styles/styled-components/styledButton";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRouter } from "next/router";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

export default function BlogSlides({ data }: any): ReactElement {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  SwiperCore.use([Autoplay]);
  const router = useRouter();
  return (
    <BoxALignCenter_Justify_ItemsCenter>
      <Button className="p-0 me-2" ref={navigationPrevRef}>
        <ArrowLeftCircle color="#28a8df" width={"30"} height={"30"} />
      </Button>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        observeParents={true}
        observer={true}
        spaceBetween={10}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          1440: {
            slidesPerView: 3,
          },
          1920: {
            slidesPerView: 3,
          },
        }}
        pagination={true}
        loop={true}
        autoplay={{ delay: 2000 }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
      >
        {data.map((blog: any, i: number) => {
          return (
            <SwiperSlide key={i}>
                <TwitterTweetEmbed tweetId={blog} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Button className="p-0 ms-2" ref={navigationNextRef}>
        <ArrowRightCircle color="#42ba6b" width={"30"} height={"30"} />
      </Button>
    </BoxALignCenter_Justify_ItemsCenter>
  );
}
