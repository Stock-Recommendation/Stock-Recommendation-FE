import React, { useEffect, useRef, useState } from "react";
// import Parallax from "parallax-js";
import { MainMenu, SubMenu } from "./MenuItem";

type Props = {};

export const Header = ({ }: Props) => {
  const sceneEl = useRef(null);
  const characterEl = useRef(null);

  const [isOpenDrawer, setOpenDrawer] = useState<boolean>(false);

  // useEffect(() => {
  //   const parallaxInstance = new Parallax(sceneEl.current, {
  //     relativeInput: true,
  //     hoverOnly: true,
  //   });
  //   parallaxInstance.enable();

  //   return () => parallaxInstance.disable();
  // }, []);

  // useEffect(() => {
  //   const parallaxInstance = new Parallax(characterEl.current, {
  //     relativeInput: true,
  //   });
  //   parallaxInstance.enable();

  //   return () => parallaxInstance.disable();
  // }, []);
  return (
    <div className="section--header" id="home">
        <div className="main py-5 mb-5">
          <div className="col-12">
            <div className="row">
              <div className="col-md-8">
                <h2 className="text-intro my-3 mt-md-5 mt-3 mb-5">
                  Tweetstock
                </h2>
                <div className="text-description">
                  Worldclass AI-enabled Stock Predictor combining <br/>
                  rigorous analysis of <span style={{color: "#28a8df" }}>Tweet Sentiments</span> and historical <br/>
                  <p style={{color: "#28a8df" }}>stock data</p>
                </div>
                <div className="d-flex align-items-center my-5">
                  <div className="text-center pr-4 right-border">
                    <div className="txt">Total Player</div>
                    <div className="txt-number">7.283.312</div>
                  </div>
                  <div className="text-center pl-4">
                    <div className="txt">Total HERA Paid Out</div>
                    <div className="txt-number">100.000.000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
