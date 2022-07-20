import React, { FC, useEffect, useState } from 'react';
import { ButtonBlue } from '@styles/styled-components/styledButton';
import TweetSlides from './TweetSlides';
// import request from '@services/apiService';
// import * as qs from 'qs';

export const Tweet: FC = () => {
    const [blogList, setBlogList] = useState(['1','2','3','4','5']);

    return (
        <section className="main-homepage-blog px-3">
            <div className="row align-items-center">
                <div className="col-lg-3 col-12 px-lg-2 px-0">
                    <h2>Twitter Sentiment</h2>
                    <p>
                        Never miss any twitter stock
                    </p>
                    <ButtonBlue className="px-4">
                        View All
                    </ButtonBlue>
                </div>
                <div className="col-lg-9 col-12 mt-lg-0 mt-4 px-lg-2 px-0">
                    <TweetSlides data={blogList} />
                </div>
            </div>
            <div className="main-homepage-blog-background" />
        </section>
    );
};
