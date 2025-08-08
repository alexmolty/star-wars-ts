import { useEffect, useState } from "react";
import { base_url } from "../../../utils/constants";
import ButtonsOpeningCrawl from "./ButtonsOpeningCrawl";

export const Home = () => {
    const [openingCrawl, setOpeningCrawl] = useState<string>("Loading...");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [animationKey, setAnimationKey] = useState<number>(0);

    const fetchOpeningCrawl = async (episodeNum: number) => {
        const saved = localStorage.getItem(`opening_crawl_${episodeNum}`);
        if (saved) {
            setOpeningCrawl(saved);
            setAnimationKey(k => k + 1);
            return;
        }

        setLoading(true);
        setError("");

        try {
            const res = await fetch(`${base_url}/films/${episodeNum}/`);
            if (!res.ok) throw new Error("Ошибка сети");
            const data = await res.json();

            setOpeningCrawl(data.opening_crawl);
            localStorage.setItem(`opening_crawl_${episodeNum}`, data.opening_crawl);
            localStorage.setItem("last_episode", episodeNum.toString());
            setAnimationKey(k => k + 1);
        } catch {
            setError("Не удалось загрузить opening crawl");
            setOpeningCrawl("");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const lastEpisode = localStorage.getItem("last_episode");
        if (lastEpisode) {
            fetchOpeningCrawl(+lastEpisode);
        } else {
            const episode = Math.floor(Math.random() * 6) + 1;
            fetchOpeningCrawl(episode);
        }
    }, []);

    return (
        <div className="h-full flex flex-col items-center p-8">
            <ButtonsOpeningCrawl fetchOpeningCrawl={fetchOpeningCrawl} />

            {loading && <p className="text-yellow-400 mt-4">Loading...</p>}
            {error && <p className="text-red-600 mt-4">{error}</p>}

            {openingCrawl && !loading && !error && (
                <div className="star-wars-container pointer-events-none" key={animationKey}>
                    <div className="crawl">
                        {openingCrawl.split("\n").map((line, i) => (
                            <p key={i}>{line}</p>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
