import React, { FC } from "react";
import { Facebook, Linkedin, Send, Twitter, Youtube } from "react-feather";
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
              Created By
            </h1>
            <br />
            <h3
              style={{
                fontWeight: "bold",
                color: "#42ba6b",
              }}
            >
              {/* Created by */}
            </h3>
            <p className="text-white fontSize_1">
              Thuan Nguyen{" "}
              <span style={{ color: "#28a8df" }}>
                <Send width={"0.8em"} height={"1.3em"} />{" "}
                kiento0905.hec@gmail.com
              </span>
              <br />
              Kien To{" "}
              <span style={{ color: "#28a8df" }}>
                <Send width={"0.8em"} height={"1.3em"} />{" "}
                kiento0905.hec@gmail.com
              </span>
              <br />
              Tai Dang{" "}
              <span style={{ color: "#28a8df" }}>
                <Send width={"0.8em"} height={"1.3em"} />{" "}
                kiento0905.hec@gmail.com
              </span>
              <br />
              Son Mong
              <span style={{ color: "#28a8df" }}>
                <Send width={"0.8em"} height={"1.3em"} />{" "}
                kiento0905.hec@gmail.com
              </span>
            </p>
            <p className="text-green mt-3 fontSize_1-1">
              {/* <span className="text-white ms-2">@email.com</span> */}
            </p>
          </div>
        </div>
        <div className="row footer_home_mobile"></div>
      </div>
    </footer>
  );
};
