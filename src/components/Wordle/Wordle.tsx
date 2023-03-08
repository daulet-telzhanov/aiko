import React from 'react';
import { toast } from 'react-hot-toast';
import BoxInput from '../BoxInput/BoxInput';
import "./component.css";

type WordleProps = {
    word: string
    onSuccess?: () => void
    successText?: string
}

const Wordle = ({word, onSuccess, successText}:WordleProps) => {
    const [guess, setGuess] = React.useState("");
    const [selectedIndex, setSelectedIndex] = React.useState<number[]>([]);
    const letters = word.split("");
    const shuffledLetters = React.useRef(shuffle(letters));

    const onClick = (letter:string, index:number) => {
        setSelectedIndex(prevState => [...prevState, index]);

        setGuess(prevState => {
            console.log(prevState);
            return prevState + letter
        })
    }

    const clear = () => {
        setSelectedIndex([]);
        setGuess("")
    }
    
    const onSubmit = () => {
        if (guess === word) {
            toast.success(successText || "жанм жанм")
            onSuccess && onSuccess();
        } else if (guess.length !== letters.length) {
            toast.error("толтыршиш")
        } else {
            toast.error("трунь")
        }
    }

    return <div>
        <h2>MINI WORDLE</h2>

        <div>
            {letters.map((_, i) => {
                return <BoxInput
                    key={`inp_${i}`}
                    value={guess[i] || ""}
                    disabled={true}
                    className={"wordle_input"}
                />
            })}
        </div>


        <div className="keyBoard">
            {shuffledLetters.current.map((letter, i) => {
                const disabled = selectedIndex.includes(i);                

                return <div 
                    key={i} 
                    onClick={() => {
                        if (!disabled) {
                            onClick(letter, i);
                        }
                    }}
                    className={disabled ? "disabled_box" : "wordle_box"}
                >
                    <BoxInput
                        value={letter}
                        disabled={true}
                        className={"wordle_input"}
                    />
                </div> 
            })}
        </div>


        <div className="buttons">
            <button onClick={clear}>
                CLEAR
            </button>

            <button onClick={onSubmit}>
                ENTER
            </button>
        </div>

    </div>
}

export default Wordle;

function shuffle(array: string[]) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function batch(arg0: () => void) {
    throw new Error('Function not implemented.');
}
