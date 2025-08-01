export interface SWContextValue {
    hero: string,
    changeHero: (hero: string) => void,
}

export interface infoHero {
    name: string;
    gender: string;
    birth_year: string;
    height: string;
    mass: number;
    hair_color: string;
    skin_color: string;
    eye_color: string;
}

export interface Character {
    name: string;
    img: string;
    url: string;
}

export type Characters = Record<string, Character>