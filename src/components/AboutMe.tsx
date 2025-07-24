import {base_url, period_month} from "../utils/constants.ts";
import {useEffect, useState} from "react";

interface infoHero {
    name?: string;
    gender?: string;
    birth_year?: string;
    height?: string;
    mass?: number;
    hair_color?: string;
    skin_color?: string;
    eye_color?: string;
}

const AboutMe = () => {
    const [hero, setHero] = useState<infoHero | undefined>();
    useEffect(() => {
        const hero = JSON.parse(localStorage.getItem("hero")!);
        if (hero && ((Date.now() - hero.timestamp) < period_month)) {
            setHero(hero.payload);
        } else {
            fetch(`${base_url}/v1/peoples/1`)
                .then(response => response.json())
                .then(data => {
                    const info: infoHero = {
                        name: data.name,
                        gender: data.gender,
                        birth_year: data.birth_year,
                        height: data.height,
                        mass: data.mass,
                        hair_color: data.hair_color,
                        skin_color: data.skin_color,
                        eye_color: data.eye_color
                    }
                    setHero(info);
                    localStorage.setItem("hero", JSON.stringify({
                        payload: info,
                        timestamp: Date.now()
                    }));
                })
        }
    }, [])

    return (
        <>
            {(!!hero) &&
                <div className='text-2xl leading-11 text-justify ml-[48px]'>
                    {(Object.keys(hero) as (keyof infoHero)[]).map(key =>
                        <p key={key}>
                            <span className={'text-3xl capitalize'}>{key.replace('_', ' ')}</span>
                            : {hero[key]}
                        </p>)}
                </div>
            }
        </>
    );
};

export default AboutMe;