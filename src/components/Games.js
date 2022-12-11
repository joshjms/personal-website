import React, { useState, useEffect } from "react";

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

function Games() {
    return (
        <ParallaxBanner className="aspect-[2/1] h-screen bg-slate-900">
            <ParallaxBannerLayer speed={-50}>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-5xl font-light text-white">
                        Play with me
                    </h1>
                </div>
            </ParallaxBannerLayer>
            <ParallaxBannerLayer translateX={[100, -150]}>
                <div
                    className="absolute inset-0 flex items-center justify-between"
                    easing={"easeOutQuad"}
                >
                    <img
                        src="../images/project_sekai.png"
                        alt="prosekai"
                        className="h-64 -rotate-3 shadow-2xl rounded-xl"
                    ></img>
                    <img
                        src="../images/valorant.png"
                        alt="valo"
                        className="h-64 -rotate-3 shadow-2xl rounded-xl"
                    ></img>
                    <img
                        src="../images/osu.png"
                        alt="osu"
                        className="h-64 -rotate-3 shadow-2xl rounded-xl"
                    ></img>
                    <img
                        src="../images/genshin.png"
                        alt="genshin"
                        className="h-64 -rotate-3 shadow-2xl rounded-xl"
                    ></img>
                    <img
                        src="../images/fgo.png"
                        alt="fgo"
                        className="h-64 -rotate-3 shadow-2xl rounded-xl"
                    ></img>
                    <img
                        src="../images/amongus.png"
                        alt="amongus"
                        className="h-64 -rotate-3 shadow-2xl rounded-xl"
                    ></img>
                </div>
            </ParallaxBannerLayer>
        </ParallaxBanner>
    );
}

export default Games;
