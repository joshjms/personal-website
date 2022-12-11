import React, { useState, useEffect } from "react";

import { ParallaxProvider } from "react-scroll-parallax";
import { ParallaxBanner } from "react-scroll-parallax";
import Achievements from "./components/Achievements";
import Games from "./components/Games";
import Landing from "./components/Landing";
import MusicPlayer from "./components/MusicPlayer";
import Profile from "./components/Profile";
import Skills from "./components/Skills";

function App() {
    return (
        <ParallaxProvider>
            <div className="lg:hidden">
                <p>mobile view when im not so lazy pls i can't design shit</p>
            </div>
            <div className="hidden lg:block h-max">
                <Landing />
                <Profile />
                <Games />
                <Skills />
                <Achievements />
                <MusicPlayer />
            </div>
        </ParallaxProvider>
    );
}

export default App;
