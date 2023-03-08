import React, { useEffect } from 'react';
import HeartLoader from '../../components/HeartLoader/HeartLoader';
import LineLoader from '../../components/LineLoader/LineLoader';
//@ts-ignore
import MovingText from 'react-moving-text';
import "./component.css";
import img_1 from "../../imgs/1.png";
import img_2 from "../../imgs/2.png";
import img_3 from "../../imgs/3.png";
import img_4 from "../../imgs/4.png";
import img_5 from "../../imgs/5.png";
import img_6 from "../../imgs/6.png";
import img_7 from "../../imgs/7.png";
import img_8 from "../../imgs/8.png";
import img_9 from "../../imgs/9.png";
import img_10 from "../../imgs/10.png";

type LoadingPageProps = {
    setIsloading: (isLoading: boolean) => void
}

const LoadingPage = ({setIsloading}:LoadingPageProps) => {
    const [load, setLoad] = React.useState<number>(0);
    const textIndex = Math.floor(load/10);    

    const texts = [
        "Привеееет 🙃 Қалайсың? 🤗",
        "Уииии QR кодты тауыпсың ғой! Мадееес 🤍🤍🤍",
        "Этот сайт сделан special for you 🎁",
        "Ы ... Ы ... Ы ...",
        "ТОП 💗 ТОП 💙 ТОП 🤍 ПАДАМ 💞 ПАДАМ 💞 ПАДАМ 💞",
        "Жанм жани жанм 😍 😍 😍 Люблю тебя 💘",
        "🐠 🐠 🐠 🐠 🐠",
        "Тааааакс ... Дайынсың ба?",
        "Кішкенееее қалды 🙃",
        "Все все ... кеттііііік ❤️‍🔥",
    ]

    const imgs = [
        img_1,
        img_2,
        img_3,
        img_4,
        img_5,
        img_7,
        img_8,
        img_6,
        img_9,
        img_10
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setLoad(prevState => prevState+1);
          }, 400);

        return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        if (load === 100) {
            setIsloading(false);
        }
    }, [load])

    return <div className='wrapper'>
        <span className='load'>{`${load}%`}</span>
        <HeartLoader/>
        <LineLoader/>
        <div className='text'>
            <MovingText
                type="fadeIn"
                duration="4000ms"
                delay="0s"
                direction="normal"
                timing="ease-out"
                iteration="11"
                fillMode="none"
            >
                {`${texts[textIndex] || "Жанм жанм жанм"}`}

                <div className="img_wrapper">
                    <img src={imgs[textIndex]} className="loading_img"/>
                </div>
            </MovingText>
        </div>
    </div>
}

export default LoadingPage;
