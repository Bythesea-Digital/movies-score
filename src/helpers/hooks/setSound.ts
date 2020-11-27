import {useEffect, useState} from "react";

const useAudio = ({soundUrl}) => {
    const [audio] = useState(new Audio(soundUrl));
    const [isPlaying, setPlaying] = useState<boolean>(false);

    const toggleSound = () => setPlaying(!isPlaying)

    useEffect(() => {
        if(isPlaying){
            audio.play()
        }else{
            audio.pause()
        }
    }, [isPlaying, audio])

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false))
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false))
        }
    }, [])

    return [toggleSound] as const
}

export default useAudio