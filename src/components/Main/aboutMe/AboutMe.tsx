import {characters, defaultHero, period_month} from "../../../utils/constants.ts";
import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router";
import type {infoHero} from "../../../utils/types";
import {StarWarsContext} from "../../../utils/context.ts";


const AboutMe = () => {
        const [hero, setHero] = useState<Partial<infoHero>>();
        const {heroId} = useParams();
        const {changeHero} = useContext(StarWarsContext);
        const selectedHero = heroId ?? defaultHero;

        useEffect(() => {
                if (!(selectedHero in characters)) return;
                changeHero(selectedHero);
                const storedData = localStorage.getItem(selectedHero);
                const heroData = storedData ? JSON.parse(storedData) : null;
                if (heroData && ((Date.now() - heroData.timestamp) < period_month)) {
                    setHero(heroData.payload);
                } else {
                    fetch(characters[selectedHero].url)
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
                            localStorage.setItem(selectedHero, JSON.stringify({
                                payload: info,
                                timestamp: Date.now()
                            }));
                        })

                }
            }, [selectedHero]
        )
        if (!hero) return null;
        return (
            <>
                {hero &&
                    <div className='max-w-4xl mx-auto m-10 flex gap-8 font-bold '>
                        <div className="flex flex-col items-center w-[100%]">
                            <img src={characters[selectedHero].img} alt={characters[selectedHero].name}
                                 className={"rounded-lg w-full object-cover"}/>
                        </div>
                        <div className="w-[100%] text-left text-xl">
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
    }
;

export default AboutMe;