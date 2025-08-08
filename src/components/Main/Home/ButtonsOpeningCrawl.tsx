import { episodes } from "../../../utils/constants";
import ButtonRoman from "./ButtonRoman";

interface ButtonsOpeningCrawlProps {
    fetchOpeningCrawl: (episodeNum: number) => void;
}

const ButtonsOpeningCrawl = ({ fetchOpeningCrawl }: ButtonsOpeningCrawlProps) => {
    return (
        <div className="flex justify-center flex-wrap">
            {episodes.map(({ ep, num }) => (
                <ButtonRoman key={ep} ep={ep} onClick={() => fetchOpeningCrawl(num)} />
            ))}
        </div>
    );
};

export default ButtonsOpeningCrawl;
