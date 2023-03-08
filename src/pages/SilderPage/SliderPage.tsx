import React, { useEffect } from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import { STAGES } from '../MainPage/MainPage';
import "./component.css";
//@ts-ignore
import MovingText from 'react-moving-text';
import { toast } from 'react-hot-toast';


type SliderPageProps = {
    setStage: (stage: STAGES) => void
}

const SliderPage = ({setStage}:SliderPageProps) => {
    const [index, setIndex] = React.useState<number>(0);
    const [viewed, setViewwed] = React.useState<number[]>([0]);

    const texts:string[] = [
        "Помнишь тот день ... 🫠🫠🫠",
        "Түрінен өзінің 😍",
        "Ойбааай ахахахаах",
        "We look so cool 😎",
        "Менің бірінші сыйлығым 🫠",
        "Қашан осылай жүреміз? хе хе",
        "Тәттііііі өзі 😍😍😍",
        "Mкмкмкмкмкмкмкм",
        "Взглядты айтсайшы 🤤",
        "Сенің бірінші гүлің уиии",
        "Ахахахахах",
        "Менің толстовкамды таңдап бергенсің",
        "Мистер энд миссис 😏",
        "Вип орындар наш наш қой",
        "Цветы собранные мною",
        "Уааааая 🫠🫠🫠",
        "Взглядты айтсайшы 🤤 №2",
        "Қыдырсақ үйге қайту деген жоқ қой аххаахах",
        "Взглядты айтсайшы 🤤 №3",
        "Взглядты айтсайшы 🤤 №4",
        "Шапка 🥲🥲🥲",
        "Самый лучший ДР в мире 🙃❤️‍🔥",
        "Жааааанм өзі ❤️‍🔥❤️‍🔥❤️‍🔥 такая слаааадкая",
        "Топ топ топ",
        "💘💘💘",
        "Такая довольная 💙 щеки щеки",
        "Без комментариев 😂😂😂",
    ]    

    const onClickNav = (toRight:boolean) => {
        let updateIndex = 0;
        if (toRight) {
            if (index === 26) {
                updateIndex = 0;
            } else {
                updateIndex = index + 1;
            }
        } else {
            if (index === 0) {
                updateIndex = 26;
            } else {
                updateIndex = 26 - 1;
            }
        }

        setIndex(updateIndex);

        if (!viewed.includes(updateIndex)) {
            setViewwed(prevState => [...prevState, updateIndex]);
        }
    }

    useEffect(() => {
        if (viewed.length === 27) {
            toast.success("Шо таам дальше кеттік па? 🙃")
        }
    }, [viewed])

    return <>
        <div className='slider_wrapper'>
            <div>
                <MovingText
                    type="slideInFromBottom"
                    duration="1000ms"
                    delay="0s"
                    direction="normal"
                    timing="ease-out"
                    iteration="1"
                    fillMode="none"
                >
                    {texts[index]}
                </MovingText>
            </div>

            <Slider
                onClickNav={onClickNav}
            />

            <div style={{marginTop: "20px"}}>
                {`${index+1}/27`}
            </div>

            <div style={{height: "60px", marginTop: "30px"}}>
                {viewed.length === 27 && 
                    <button onClick={() => {setStage(STAGES.TEXT)}} className="slider_button">
                        Кеттік
                    </button>}
            </div>
        </div>
    </>
    
}

export default SliderPage;

type SliderProps = {
    onClickNav: (toRight:boolean) => void
}

const Slider = React.memo(({onClickNav}:SliderProps) => {

    const images:string[] = [
        "slider_imgs/71ad62a9-68ab-494d-a29c-3851ab893d15.JPG",
        "slider_imgs/1182ff50-dba4-455d-9224-426655c1fe5b.JPG",
        "slider_imgs/B321B0FF-6117-4F57-8DD4-68AF8E7392AF.JPG",
        "slider_imgs/64837b5f-f2b9-4637-872e-1a063e04566b.JPG",
        "slider_imgs/C2B90D36-3056-452B-B8E4-68F5382740B3.JPG",
        "slider_imgs/c6808230-784d-4255-a498-9468d154097a.JPG",
        "slider_imgs/IMG_5467.jpg",
        "slider_imgs/IMG_5687.jpg",
        "slider_imgs/IMG_5765.jpg",
        "slider_imgs/IMG_5939.jpg",
        "slider_imgs/IMG_5950.jpg",
        "slider_imgs/IMG_5953.jpg",
        "slider_imgs/IMG_6001.jpg",
        "slider_imgs/IMG_6182.jpg",
        "slider_imgs/IMG_6223.jpg",
        "slider_imgs/IMG_6311.jpg",
        "slider_imgs/IMG_6347.jpg",
        "slider_imgs/IMG_6403.jpg",
        "slider_imgs/IMG_6426.jpg",
        "slider_imgs/IMG_6474.jpg",
        "slider_imgs/IMG_6520.jpg",
        "slider_imgs/IMG_6643.jpg",
        "slider_imgs/IMG_6689.jpg",
        "slider_imgs/IMG_6963.jpg",
        "slider_imgs/IMG_7036.jpg",
        "slider_imgs/IMG_7256.jpg",
        "slider_imgs/last.JPG"
    ]    

    return  <div className='slider'>
        <SimpleImageSlider
            style={{
                width: "200px !important", 
                height: "unset !important"
            }}
            width={"auto"}
            height={"auto"}
            images={images}
            showBullets={false}
            showNavs={true}
            onClickNav={onClickNav}
        />
    </div>
})
