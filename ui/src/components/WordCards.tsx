import WordCard, {WordCardInfo} from "./WordCard.tsx";
import {useEffect, useState} from "react";

function WordCards({wordCardInfos}: { wordCardInfos: WordCardInfo[] }) {
    const [current, setCurrent] = useState<number>(0)
    const [isFront, setIsFront] = useState(true)

    useEffect(() => {
        setIsFront(true)
    }, [current]);

    const forward = () => {
        setCurrent((prev) => wordCardInfos.length - 1 === prev ? prev : prev + 1)
    }

    const backward = () => {
        setCurrent((prev) => 0 === prev ? prev : prev - 1)
    }

    const updateIsFront = (newValue: boolean) => {
        setIsFront(newValue)
    }

    return (
        <WordCard wordCardInfo={wordCardInfos[current]}
                  isFront={isFront}
                  setIsFront={updateIsFront}
                  forward={forward}
                  backward={backward}
                  isFirst={current === 0}
                  isLast={current === wordCardInfos.length - 1}
        />
    );
}

export default WordCards;
