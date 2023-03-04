import React, { useEffect } from 'react';
import BoxInput from '../../components/BoxInput/BoxInput';
import "./component.css";
//@ts-ignore
import MovingText from 'react-moving-text';

const MainPage = () => {

    return <div className='main_page'>
        <EnterCode/>
    </div>
}

export default MainPage;


const EnterCode = () => {
    const [visible, setVisible] = React.useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 3100)
    }, []);

    const secondRef = React.createRef<any>();
    const thirdRef = React.createRef<any>();
    const forthRef = React.createRef<any>();

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
                onChange={(event) => {
                    const {value} = event.target;    
                    if (value && secondRef.current) {
                        secondRef.current.focus();
                    }
                }}
            />
            
            <BoxInput 
                maxLength={1}
                onChange={(event) => {
                    const {value} = event.target;
                    if (value && thirdRef.current) {
                        thirdRef.current.focus();
                    }
                }}
                ref={secondRef}
            />

            <BoxInput 
                maxLength={1}
                onChange={(event) => {
                    const {value} = event.target;
                    if (value && forthRef.current) {
                        forthRef.current.focus();
                    }
                }}
                ref={thirdRef}
            />

            <BoxInput 
                maxLength={1}
                onChange={(event) => {
                    const {value} = event.target;
                    
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
