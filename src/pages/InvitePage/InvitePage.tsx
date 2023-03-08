import React from 'react';
import { STAGES } from '../MainPage/MainPage';
import "./component.css";
import img from "../../imgs/orch.jpeg";

type InvitePageProps = {
    setStage: (stage: STAGES) => void
}

const InvitePage = ({setStage}:InvitePageProps) => {

    return <div className='invite_wrapper'>
        <div>
            SHOW SYMPHONY ORCHESTRA
        </div>
        <div>
            10 марта, 19:00
        </div>
        <div className='invite_img'>
            <img src={img}/>
        </div>
        
        <button className='invite_button' onClick={() => {setStage(STAGES.END)}}>
            УРААА
        </button>
    </div>
}

export default InvitePage;
