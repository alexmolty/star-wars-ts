import {starWarsInfo} from "../../../utils/constants.ts";

const StarWars = () => {
    return (
        <div className="text-[1.5em] text-justify leading-[1.5] ">
            {starWarsInfo}
        </div>
    );
};

export default StarWars;