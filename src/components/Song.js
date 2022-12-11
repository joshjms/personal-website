import React, { useState, useEffect } from "react";

const useAudio = (url, active, next) => {
    const [audio] = useState(new Audio(url));
    const [loaded, setLoaded] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [time, setTime] = useState(0);

    const [timer, setTimer] = useState(0);

    const toggle = () => setPlaying(!playing);
    const seek = (e) => (audio.currentTime = e.target.value);

    useEffect(() => {
        if (audio.readyState >= 4) {
            setLoaded(true);
            setDuration(audio.duration);
        }
    }, [audio.readyState]);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    }, [playing]);

    useEffect(() => {
        setTimeout(() => {
            setTime(Math.floor(audio.currentTime));
            setTimer(timer + 1);
        }, 1000);
    }, [timer]);

    useEffect(() => {
        setPlaying(false);
        audio.pause();
        audio.src = url;
        audio.onended = () => {
            next();
        };
        audio.currentTime = 0;
        setPlaying(true);
        audio.play();
    }, [url]);

    return [loaded, playing, toggle, duration, time, seek];
};

function Song({ song, active, next, prev }) {
    const [loaded, playing, toggle, duration, time, seek] = useAudio(
        song.url,
        active,
        next
    );

    return (
        <div className="w-[65%] h-80 bg-white/20 shadow-lg shadow-sky-300/50 p-5 rounded-2xl">
            <div className="flex gap-10">
                <img
                    src={song.coverImage}
                    alt={song.name}
                    className="h-40 w-40 rounded-xl shadow-lg shadow-pink-300/50"
                ></img>
                <div className="text-white font-light mt-10">
                    <h3 className="font-thin text-5xl">{song.name}</h3>
                    <p className="text-sm mt-3">{song.artist}</p>
                </div>
            </div>
            <div className="w-full mt-5">
                <input
                    type="range"
                    min={0}
                    max={duration}
                    value={time}
                    className="w-full slider"
                    onInput={seek}
                />
            </div>

            <div className="w-[50%] mx-auto flex justify-center gap-5 mt-3">
                <button
                    onClick={prev}
                    className="bg-pink-300 shadow-pink-300 hover:shadow-sky-300 text-white w-10 h-10 rounded flex justify-center items-center shadow-xl hover:bg-sky-300 ease-in-out duration-500"
                >
                    <i className="fa-solid fa-backward-step text-xl"></i>
                </button>
                <button
                    onClick={toggle}
                    className="bg-pink-300 shadow-pink-300 hover:shadow-sky-300 text-white w-10 h-10 rounded flex justify-center items-center shadow-xl hover:bg-sky-300 ease-in-out duration-500"
                >
                    <i
                        className={
                            playing
                                ? "fa-solid fa-pause text-xl"
                                : "fa-solid fa-play text-xl"
                        }
                    ></i>
                </button>
                <button
                    onClick={next}
                    className="bg-pink-300 shadow-pink-300 hover:shadow-sky-300 text-white w-10 h-10 rounded flex justify-center items-center shadow-xl hover:bg-sky-300 ease-in-out duration-500"
                >
                    <i className="fa-solid fa-forward-step text-xl"></i>
                </button>
            </div>
        </div>
    );
}

export default Song;
