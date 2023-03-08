import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { STAGES } from '../MainPage/MainPage';
import "./component.css";

type TextPageProps = {
    setStage: (stage: STAGES) => void
}

const TextPage = ({setStage}:TextPageProps) => {
    const [finished, setFinished] = React.useState<boolean>(false);

    return <div className='text_wrapper'>
        <TypeAnimation
            sequence={[
                'Менің жаным',
                2000,
                'Менің күнім',
                1000, 
                'Менің ботам',
                1000,
                'Менің монькам',
                1000,
                'Менің монькам ❤️‍🔥❤️‍🔥❤️‍🔥, сені мерекеңмен құттықтаймын!!!',
                1500,
                'Сені қатты қатты жақсы көремін ❤️‍🔥❤️‍🔥❤️‍🔥. Әр күнің бақытқа бөленсін!!!',
                1000,
                'Сенің күлкің үшін не істемейсің 🙃 Жанм жанм өзі',
                1000,
                'Біріншіден өзіңе деген махаббатты ұмытпа. Ешқашан өзіңді екінші планға қойма 💋. Ты достойна всего-всего, что я делаю для тебя 💙',
                1000,
                'Жәнеее бізге уже 6 ааай 🥳🥳🥳. Былай қарасаң жарты жыл ғана, бірақ осы жарты жыл 3-4 жылдай болып өтті маған.',
                1000,
                'Менен бақытты адам жоқ шығар хе хе 😘. Енді бізгее уже 1 жыл, 2 жыл, 10 жыл, 50 жыл (и т.д) деген сәттерге жете берейік !!!',
                1000,
                'Қанша жыл өтсе де, саған деген қамқорлығым, махаббатым ешқашан өзгермейді 🤍🤍🤍',
                1000,
                'Ендіііі ...',
                1000,
                'Ендіііі',
                1000,
                'Ендіііі ...',
                1000,
                'Ендіііі соған орааааай сенііііііііііііііі',
                1000,
                'шақырамыыыыыыын 🥁🥁🥁🥁🥁',
                1000,
                () => {
                    setFinished(true)
                }
            ]}
            wrapper="div"
            cursor={true}
            speed={50}
            style={{ fontSize: '1.5em' }}
        />

        {finished && <div className='text_buttons'>
            <button onClick={() => {setStage(STAGES.INVITE)}}>
                АЙТСИШ ЕНДІ
            </button>
        </div>}
    </div>  
}

export default TextPage;
