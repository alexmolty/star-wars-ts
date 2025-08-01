import {starWarsInfo} from "../../../utils/constants.ts";
import {useErrorPage} from "../../../hooks/useErrorPage.tsx";
import ErrorPage from "../ErrorPage/ErrorPage.tsx";

const StarWars = () => {
    const {isError} = useErrorPage();

    return !isError ? (
        <div className="text-[1.5em] text-justify leading-[1.5] ">
            {starWarsInfo}
        </div>
    ) : <ErrorPage/>
};

export default StarWars;