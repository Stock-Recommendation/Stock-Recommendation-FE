import React, { ReactElement } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "react-feather";
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BoxALignCenter_Justify_ItemsCenter, BoxALignItemsCenter, CategoryBox, CategoryUnbox } from "@styles/styled-components/styledBox";
import { URL_API_ADMIN, URL_API_IMG } from "@config/index";
import { Button } from '@styles/styled-components/styledButton';
import moment from "moment";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Empty } from "antd";
import { useRouter } from "next/router";
import TweetEmbed from "react-tweet-embed";

export default function BlogSlides({ data }: any): ReactElement {
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
    SwiperCore.use([Autoplay]);
    const router = useRouter();
    return (
        <BoxALignCenter_Justify_ItemsCenter>
            <Button className="p-0 me-2" ref={navigationPrevRef}>
                <ArrowLeftCircle color="#058499" width={'30'} height={'30'} />
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
                    crossFade: true
                }}
            >
                {data.map((blog: any, i: number) => {
                    const onClick = (data: any) => {
                        const slug = data.attributes.slug;
                        router.push(`/dapp-news/${slug}`);
                    };
                    return (
                        <SwiperSlide key={i}>
                            <TweetEmbed tweetId={'1545136512274255874'}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <Button className="p-0 ms-2" ref={navigationNextRef}>
                <ArrowRightCircle color="#058499" width={'30'} height={'30'} />
            </Button>
        </BoxALignCenter_Justify_ItemsCenter>
    )
}
