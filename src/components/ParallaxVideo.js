import React, { useState, useEffect } from "react";

function ParallaxVideo({ src }) {
    return (
        <div className="">
            <div className="h-[20vh] bg-gray-800 mb-[60vh]"></div>
            <div className="h-[60vh] absolute top-0">
                <video
                    autoPlay
                    muted
                    loop
                    className="w-full h-[100vh] object-cover object-center fixed -z-50"
                >
                    <source src={src} type="video/mp4" />
                </video>
            </div>
            <div className="h-[20vh] bg-gray-800"></div>
        </div>
    );
}

export default ParallaxVideo;
