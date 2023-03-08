import React from 'react';
import { toast } from 'react-hot-toast';
import Wordle from '../../components/Wordle/Wordle';
import { STAGES } from '../MainPage/MainPage';

type WordleProps = {
    setStage: (stage: STAGES) => void
}

const WordlePage = ({setStage}:WordleProps) => {
    const [index, setIndex] = React.useState<number>(0);

    const words = [
        "ЖАНЫМ",
        "БОТАМ",
        "МОНЬКА",
        "МКМКМК",
        "ILOVEU"
    ]

    return <>
        {
            words.map((word, i) => {
                return index === i ? <Wordle
                    key={i}
                    word={word}
                    successText={i === words.length - 1 ? "Все все) бітті. Ендіііі фотолор көрейік" : ""}
                    onSuccess={() => {
                        if (i === words.length - 1) {
                            setStage(STAGES.SLIDER);
                        } else {
                            setIndex(prevState => prevState + 1)
                        }
                    }}
                /> : <></>
            })
        }
    </>
}

export default WordlePage;