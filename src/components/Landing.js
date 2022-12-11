import React from "react";

import { ParallaxBanner } from "react-scroll-parallax";

function Landing() {
    return (
        <ParallaxBanner
            layers={[
                {
                    speed: 100,
                    children: (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h1 className="text-8xl text-white font-thin">
                                Hello World!
                            </h1>
                        </div>
                    ),
                },
            ]}
            className="aspect-[2/1] h-screen bg-slate-900"
        />
    );
}

export default Landing;
