import React, { useEffect } from 'react';
import BoxInput from '../../components/BoxInput/BoxInput';
import "./component.css";
//@ts-ignore
import MovingText from 'react-moving-text';
import { toast } from 'react-hot-toast';
import WordlePage from '../WordlePage/WordlePage';
import SliderPage from '../SilderPage/SliderPage';
import TextPage from '../TextPage/TextPage';
import InvitePage from '../InvitePage/InvitePage';
import EndPage from '../EndPage/EndPage';

export enum STAGES {
    CODE = "CODE",
    WORDLE = "WODLE",
    SLIDER = "SLIDER",
    TEXT = "TEXT",
    INVITE = "INVITE",
    END = "END"
}

const MainPage = () => {
    const [stage, setStage] = React.useState<STAGES>(STAGES.CODE); 

    return <div className='main_page'>
        {stage === STAGES.CODE && <EnterCode setStage={setStage}/>}
        {stage === STAGES.WORDLE && <WordlePage setStage={setStage}/>}
        {stage === STAGES.SLIDER && <SliderPage setStage={setStage}/>}
        {stage === STAGES.TEXT && <TextPage setStage={setStage}/>}
        {stage === STAGES.INVITE && <InvitePage setStage={setStage}/>}
        {stage === STAGES.END && <EndPage/>}
    </div>
}

export default MainPage;

type EnterCodeProps = {
    setStage: (stage: STAGES) => void
}

const EnterCode = ({setStage}:EnterCodeProps) => {
    const [visible, setVisible] = React.useState(false);
    const [code, setCode] = React.useState({
        0: "",
        1: "",
        2: "",
        3: ""
    });

    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 3100)
    }, []);

    const firstRef = React.createRef<any>();
    const secondRef = React.createRef<any>();
    const thirdRef = React.createRef<any>();
    const forthRef = React.createRef<any>();

    useEffect(() => {
        const codeString = Object.values(code).map((v) => {{
            if (v) return v
            return ""
        }}).join("");

        if (codeString.length === 4) {
            if (codeString === "1004") {
                toast.success("УИИ 🥳 Кішкене WORLDE ойнап жіберейік)");
                setStage(STAGES.WORDLE);
            } else {
                toast.error("Трунь");

                setCode({
                    0: "",
                    1: "",
                    2: "",
                    3: ""
                });

                if (firstRef.current) {
                    firstRef.current.focus();
                }
            }
        }
    }, [code])

    return <div>    
        <div className='m20'>
            <MovingText
                type="slideInFromBottom"
                duration="1000ms"
                delay="0s"
                direction="normal"
                timing="ease-out"
                iteration="1"
                fillMode="none"
            >
                Введите код
            </MovingText>
        </div>
            

        <div className='inputs_wrapper'>
            <BoxInput 
                maxLength={1}
                value={code[0] || ""}
                onChange={(event) => {
                    const {value} = event.target; 

                    setCode(prevState => ({
                        ...prevState,
                        0: value
                    }))   

                    if (value && secondRef.current) {
                        secondRef.current.focus();
                    }
                }}
                ref={firstRef}
            />
            
            <BoxInput 
                maxLength={1}
                value={code[1] || ""}
                onChange={(event) => {
                    const {value} = event.target;

                    setCode(prevState => ({
                        ...prevState,
                        1: value
                    }))   

                    if (value && thirdRef.current) {
                        thirdRef.current.focus();
                    }
                }}
                ref={secondRef}
            />

            <BoxInput 
                maxLength={1}
                value={code[2] || ""}
                onChange={(event) => {
                    const {value} = event.target;

                    setCode(prevState => ({
                        ...prevState,
                        2: value
                    }))   

                    if (value && forthRef.current) {
                        forthRef.current.focus();
                    }
                }}
                ref={thirdRef}
            />

            <BoxInput 
                maxLength={1}
                value={code[3] || ""}
                onChange={(event) => {
                    const {value} = event.target;
                    
                    setCode(prevState => ({
                        ...prevState,
                        3: value
                    }))   

                }}
                ref={forthRef}
            />
        </div>

        <div className='mh'>
            {visible && <MovingText
                type="slideInFromRight"
                duration="3000ms"
                delay="0s"
                direction="normal"
                timing="ease-out"
                iteration="1"
                fillMode="none"
            >
                Білмейм емес 🙃 Білесің ХЕ ХЕ
            </MovingText>}
        </div>
    </div>
}
