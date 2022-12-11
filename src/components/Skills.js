import React, { useState, useEffect } from "react";

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

function Skills() {
    return (
        <ParallaxBanner className="aspect-[2/1] h-screen bg-slate-900">
            <ParallaxBannerLayer
                image="../images/minatoaqua.jpg"
                className="bg-slate-500 bg-blend-multiply"
                speed={-50}
            />
            <ParallaxBannerLayer speed={-15}>
                <div className="absolute w-max h-max inset-0 top-[40%] left-[30%]">
                    <div className="mb-3 text-white">
                        <h3 className="text-6xl font-light">Skills</h3>
                        <p className="text-xs font-extralight">What I can do</p>
                    </div>
                </div>
            </ParallaxBannerLayer>
            <ParallaxBannerLayer speed={50}>
                <div className="absolute w-max h-max inset-0 top-[40%] left-[50%]">
                    <div className="bg-white/10 shadow-xl p-10 rounded-2xl">
                        <ul className="font-light list-decimal text-white">
                            <li>Shitposting among us and political memes.</li>
                            <li>🤓 coding (L asf not real skill)</li>
                            <li>Listening to a lot of vocaloid.</li>
                            <li>Capping about my achievements and skills.</li>
                            <li>
                                Spamming libraries and weirdshit data
                                structures.
                            </li>
                            <li>Click the circles.</li>
                            <li>
                                Spending money on figurines and gacha games.
                            </li>
                        </ul>
                    </div>
                </div>
            </ParallaxBannerLayer>
        </ParallaxBanner>
    );
}

export default Skills;
