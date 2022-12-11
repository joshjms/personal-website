import React, { useState, useEffect } from "react";

function SongList({ songQueue, active, change }) {
    return (
        <div className="bg-white/20 h-max overflow-y-auto w-[30%] shadow-lg shadow-pink-300/50">
            {songQueue.map((e, i) => (
                <div
                    className="hover:bg-gray-200/50 flex items-center hover:cursor-pointer"
                    onClick={() => {
                        change(i);
                    }}
                >
                    <img
                        src={e.coverImage}
                        alt={e.name}
                        className="w-[20%] mr-5"
                    ></img>
                    <h3
                        className={
                            "font-light w-[60%] text-sm " +
                            (active === i
                                ? "text-green-300 font-normal"
                                : "text-white")
                        }
                    >
                        {e.name}
                    </h3>
                </div>
            ))}
        </div>
    );
}

export default SongList;
