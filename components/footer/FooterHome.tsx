import React, { FC } from "react";
import { Facebook, Linkedin, Send, Twitter, Youtube } from "react-feather";
import { BoxALignCenter_Justify_ItemsCenter } from "@styles/styled-components/styledBox";
import { MediumOutlined } from "@ant-design/icons";
import { IconsCircle } from "@styles/styled-components/styledButton";
import Link from "next/link";

export const FooterHome: FC = () => {
  const menuListFooter = [
    { name: "Listing NFT", href: "#", tab: false },
    { name: "Submit Dapp", href: "#", tab: false },
    { name: "Advertise", href: "#", tab: false },
    { name: "Term of use", href: "#", tab: false },
    { name: "Policy", href: "#", tab: false },
    { name: "Whitepaper", href: "#", tab: false },
    { name: "Proposal", href: "#", tab: false },
    { name: "Apply INO Project", href: "#", tab: false },
  ];

  return (
    <footer id="footer_home">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12">
            <h1
              style={{
                fontWeight: "bold",
                color: "#28a8df",
              }}
            >
              Tweetstock
            </h1>
            <br />
            <h3
              style={{
                fontWeight: "bold",
                color: "#42ba6b",
              }}
            >
              Created by
            </h3>
            <p className="text-white fontSize_1">
              Thuan Nguyen <br />
              Kien To <br />
              Tai Dang <br />
              Son Mong
            </p>
            <p className="text-green mt-3 fontSize_1-1">
              <span className="text-green">
                <Send width={"1.3em"} height={"1.3em"} />
              </span>
              <span className="text-white ms-2">@email.com</span>
            </p>
          </div>
        </div>
        <div className="row footer_home_mobile"></div>
        {/* <BoxALignCenter_Justify_ItemsCenter className="border_footer_top pt-4 pb-1">
                    <p className="text-white m-0 fw-bold">
                        Copyright © 2022 TweetStock. All rights reserved
                    </p>
                </BoxALignCenter_Justify_ItemsCenter> */}
      </div>
      {/* <div className="land" /> */}
    </footer>
  );
};
