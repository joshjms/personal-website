import React, { useState, useEffect } from "react";
import FlipCard from "react-flipcard-2";

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

import Nahida from "./Nahida";

function Profile() {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setTimer(timer + 1);
        }, 1000);
    }, [timer]);

    let hours = Math.floor(timer / 3600).toString();
    if (hours.length === 1) hours = "0" + hours;
    let minutes = Math.floor((timer % 3600) / 60).toString();
    if (minutes.length === 1) minutes = "0" + minutes;
    let seconds = Math.floor(timer % 60).toString();
    if (seconds.length === 1) seconds = "0" + seconds;

    return (
        <ParallaxBanner className="aspect-[2/1] h-screen relative bg-slate-900">
            <ParallaxBannerLayer
                image="../images/nahida.jpg"
                className="bg-slate-500 bg-blend-multiply"
                speed={-50}
            />
            <ParallaxBannerLayer translateX={[150, 30]} easing={"easeOutQuad"}>
                <div className="absolute inset-0 top-[15%]">
                    <Nahida />
                </div>
            </ParallaxBannerLayer>
            <ParallaxBannerLayer speed={-15}>
                <div className="absolute w-max h-max inset-0 top-[45%] left-[20%]">
                    <div className="mb-3 text-white">
                        <h3 className="text-5xl font-thin">Joshua James</h3>
                        <p className="font-light">
                            Student @ NTU - Competitive Programmer
                        </p>
                    </div>
                </div>
            </ParallaxBannerLayer>
            <ParallaxBannerLayer translateX={[-180, 50]} easing={"easeOutQuad"}>
                <div className="absolute w-max h-max inset-0 top-[55%] left-[20%]">
                    <FlipCard>
                        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 w-80 p-3 rounded-2xl hover:cursor-pointer shadow-xl">
                            <p className="text-xs font-bold text-gray-50 uppercase mb-2">
                                Playing a Game
                            </p>
                            <div className="flex gap-4">
                                <div className="w-16 h-16 relative">
                                    <img
                                        src="https://cdn.discordapp.com/app-assets/383226320970055681/808841241142755358.png"
                                        alt="js"
                                        className="w-16 h-16 rounded-xl"
                                    ></img>
                                    <img
                                        src="https://cdn.discordapp.com/app-assets/383226320970055681/565945770067623946.png"
                                        alt="vs"
                                        className="w-6 h-6 absolute -bottom-1 -right-1 rounded-full"
                                    ></img>
                                </div>
                                <div className="text-sm text-gray-50">
                                    <h5 className="font-medium">
                                        Visual Studio Code
                                    </h5>
                                    <p>Editing App.js</p>
                                    <p>Workspace: Your mom</p>
                                    <p>
                                        {hours}:{minutes}:{seconds} Elapsed
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 w-80 p-3 rounded-2xl hover:cursor-pointer shadow-xl">
                            <p className="text-xs font-bold text-gray-50 uppercase mb-2">
                                Playing a Game
                            </p>
                            <div className="flex gap-4">
                                <div className="w-16 h-16 relative">
                                    <img
                                        src="https://cdn1.codashop.com/S/content/mobile/images/product-tiles/genshinimpact_tile.jpg"
                                        alt="js"
                                        className="w-16 h-16 rounded-xl"
                                    ></img>
                                </div>
                                <div className="text-sm text-gray-50">
                                    <h5 className="font-medium">
                                        Genshin Impact
                                    </h5>
                                    <p>for {Math.floor(timer / 60)} minutes</p>
                                </div>
                            </div>
                        </div>
                    </FlipCard>
                </div>
            </ParallaxBannerLayer>
        </ParallaxBanner>
    );
}

export default Profile;
