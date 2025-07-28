import {characters, period_month} from "../../../utils/constants.ts";
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import type {infoHero} from "../../../utils/types";


const AboutMe = () => {
    const [hero, setHero] = useState<Partial<infoHero>>();
    const {heroId} = useParams();
    const selectedName = ((heroId && heroId in characters) ? heroId : "luke") as keyof typeof characters;

    useEffect(() => {
        const storedData = localStorage.getItem(selectedName);
        const heroData = storedData ? JSON.parse(storedData) : null;
        if (heroData && ((Date.now() - heroData.timestamp) < period_month)) {
            setHero(heroData.payload);
        } else {
            fetch(characters[selectedName].url)
                .then(response => response.json())
                .then(data => {
                    const info: Partial<infoHero> = {
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
                    localStorage.setItem(selectedName, JSON.stringify({
                        payload: info,
                        timestamp: Date.now()
                    }));
                })

        }
    }, [heroId, selectedName])
    if (!hero) return null;
    return (
        <>
            {hero &&
                <div className='max-w-4xl mx-auto m-15 flex gap-10 font-bold '>
                    <div className="flex flex-col items-center w-1/2">
                    <h1 className="mt-4 text-3xl font-bold">{characters[selectedName].name}</h1>
                    <img src={characters[selectedName].img} alt={characters[selectedName].name} className={"rounded-lg w-full object-cover"}/>
                    </div>
                    <div className="w-1/2 text-left text-xl my-10">
                    {(Object.keys(hero) as (keyof infoHero)[]).map(key =>
                        <p key={key} className={"text-2xl"}>
                            <span className={'font-semibold capitalize'}>{key.replace('_', ' ')}</span>
                            : {hero[key]}
                        </p>
                    )}
                    </div>
                </div>
            }
        </>
    );
};

export default AboutMe;