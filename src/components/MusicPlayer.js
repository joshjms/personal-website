import React, { useState, useEffect } from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import Song from "./Song";
import SongList from "./SongList";

const SongQueue = [
    {
        name: "Aquairo Palette",
        coverImage:
            "https://hololive.hololivepro.com/wp-content/uploads/2021/04/unnamed-file-2-1536x1536.jpg",
        artist: "Minato Aqua",
        url: "../audios/aquairopalette.mp3",
    },
    {
        name: "Kaisou Ressha",
        coverImage:
            "https://hololive.hololivepro.com/wp-content/uploads/2021/08/aqua_kaisou_jk-1536x1536.jpg",
        artist: "Minato Aqua",
        url: "../audios/kaisouressha.mp3",
    },
    {
        name: "Aiwana",
        coverImage:
            "https://hololive.hololivepro.com/wp-content/uploads/2022/02/湊あくあ_あいわな_jk-1536x1536.jpg",
        artist: "Minato Aqua",
        url: "../audios/aiwana.mp3",
    },
    {
        name: "uni-birth",
        coverImage:
            "https://hololive.hololivepro.com/wp-content/uploads/2021/12/あくあ_unibirth_jk-1536x1536.png",
        artist: "Minato Aqua",
        url: "../audios/unibirth.mp3",
    },
    {
        name: "Kira Kira",
        coverImage:
            "https://hololive.hololivepro.com/wp-content/uploads/2021/11/湊あくあ_きらきら_jk-1536x1536.jpg",
        artist: "Minato Aqua",
        url: "../audios/kirakira.mp3",
    },
    {
        name: "Let me be your SAIOSHI!",
        coverImage:
            "https://hololive.hololivepro.com/wp-content/uploads/2022/12/清書_ロゴ付き.png",
        artist: "Minato Aqua",
        url: "../audios/saioshi.mp3",
    },
];

const Length = SongQueue.length;

function MusicPlayer() {
    const [currentPlaying, setCurrentPlaying] = useState(0);

    const next = () => setCurrentPlaying((currentPlaying + 1) % Length);
    const prev = () =>
        setCurrentPlaying((currentPlaying - 1 + Length) % Length);

    return (
        <ParallaxBanner className="h-screen">
            <ParallaxBannerLayer
                image="../images/mikuu.png"
                speed={-50}
                className="bg-slate-600 bg-blend-multiply"
            ></ParallaxBannerLayer>
            <ParallaxBannerLayer speed={50}>
                <div className="absolute inset-0 flex items-center w-[80%] mx-auto gap-[5%]">
                    <SongList
                        songQueue={SongQueue}
                        active={currentPlaying}
                        change={setCurrentPlaying}
                    />
                    <Song
                        active={currentPlaying}
                        song={SongQueue[currentPlaying]}
                        next={next}
                        prev={prev}
                    />
                </div>
            </ParallaxBannerLayer>
        </ParallaxBanner>
    );
}

export default MusicPlayer;
