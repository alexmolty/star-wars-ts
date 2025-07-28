export interface SWContextValue {
    page: string,
    changePage: (page: string) => void,
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

export interface charactersInterface {
    name: string;
    img: string;
    url: string;
}