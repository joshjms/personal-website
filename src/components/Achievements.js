import React, { useState, useEffect } from "react";

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

function Achievements() {
    return (
        <ParallaxBanner className="aspect-[2/1] h-screen bg-slate-900">
            <ParallaxBannerLayer speed={50}>
                <div className="absolute w-max h-max inset-0 top-[45%] left-[22%]">
                    <div className="bg-white/10 shadow-xl p-10 rounded-2xl">
                        <ul className="font-light list-decimal text-white">
                            <li>Gold Medal in National Olympiad in Informatics</li>
                            <li>Nahida in Genshin Impact</li>
                            <li>Got into NTU!!!</li>
                            <li>Asean Scholarship</li>
                        </ul>
                    </div>
                </div>
            </ParallaxBannerLayer>
            <ParallaxBannerLayer speed={-15}>
                <div className="absolute w-max h-max inset-0 top-[45%] left-[60%]">
                    <div className="mb-3 text-white">
                        <h3 className="text-6xl font-light">Achievements</h3>
                        <p className="text-xs font-extralight">What I did</p>
                    </div>
                </div>
            </ParallaxBannerLayer>
        </ParallaxBanner>
    );
}

export default Achievements;