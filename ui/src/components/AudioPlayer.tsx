import React, {useEffect, useState} from "react";
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import {IconButton} from "@mui/material";

function AudioPlayer({audioUrl}: { audioUrl: string }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio, setAudio] = useState(new Audio(audioUrl))

    console.log("mp3 url: " + audioUrl)

    useEffect(() => {
        setAudio(new Audio(audioUrl));
        setIsPlaying(false)
    }, [audioUrl]);

    useEffect(() => {
        audio.addEventListener("ended", (e) => {
            e.stopPropagation()
            setIsPlaying(false)
        })
        return () => {
            audio.removeEventListener("ended", () => {
            })
            audio.pause()
            audio.currentTime = 0
        }
    }, [audio]);

    const togglePlaying = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (isPlaying) {
            audio.pause()
            setIsPlaying(!isPlaying)
            return Promise.resolve()
        } else {
            const promise = audio.play()
            setIsPlaying(!isPlaying)
            return promise;
        }
    }

    return (
        <div>
            <IconButton onClick={togglePlaying} size="large">
                {isPlaying ? <PauseIcon fontSize={"large"}/> : <VolumeUpRoundedIcon fontSize={"large"}/>}
            </IconButton>
        </div>
    );
}

export default AudioPlayer;
