import {useEffect, useState} from "react";
import {base_url, period_month} from "../../../utils/constants.ts";
import {useErrorPage} from "../../../hooks/useErrorPage.tsx";
import ErrorPage from "../ErrorPage/ErrorPage.tsx";

const Contact = () => {
    const [planets, setPlanets] = useState(['wait...']);
    const {isError} = useErrorPage();


    async function getPlanets() {
        const res = await fetch(`${base_url}/v1/planets`);
        const data: Array<{ name: string }> = await res.json();
        const planets = data.map(item => item.name);
        setPlanets(planets);
        localStorage.setItem('planets', JSON.stringify({
            payload: planets,
            time: Date.now()
        }));
    }

    useEffect(() => {
        const planets = JSON.parse(localStorage.getItem('planets')!);
        if (planets && ((Date.now() - planets.time) < period_month)) {
            setPlanets(planets.payload);
        } else {
            getPlanets().then(() => console.log('Planets were loaded'));
        }
    }, []);

    const labelClasses = "text-center m-4 py-5 rounded-xl w-96";
    const inputClasses = "mx-8 px-7 text-center text-blue-50 bg-transparent border border-amber-300 rounded placeholder:text-blue-50 placeholder:opacity-100";

    return isError ? <ErrorPage/> : (
        <form
            className="rounded-t-2xl px-4 bg-transparent grid justify-items-center"
            onSubmit={e => e.preventDefault()}
        >
            <label className={labelClasses}>
                First Name:
                <input
                    type="text"
                    name="firstname"
                    placeholder="Your name.."
                    className={inputClasses}
                />
            </label>

            <label className={labelClasses}>
                Last Name:
                <input
                    type="text"
                    name="lastname"
                    placeholder="Your last name.."
                    className={inputClasses}
                />
            </label>

            <label className={`${labelClasses} grid text-center`}>
                Planet:
                <select name="planet" className={"mx-8 px-7 py-2 text-center text-blue-50 bg-black border border-amber-300 rounded opacity-90"}>
                    <option value="">Choose planet...</option>
                    {planets.map(item => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
            </label>

            <label className={labelClasses}>
                Subject:
                <textarea
                    name="subject"
                    placeholder="Write something.."
                    className={`${inputClasses} resize-none overflow-hidden`}
                    rows={1}
                    onInput={(e) => {
                        e.currentTarget.style.height = "auto";
                        e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
                    }}
                ></textarea>
            </label>

            <button
                type="submit"
                className="bg-red-color border-black border-2 rounded-md px-3 py-2 cursor-pointer hover:bg-red-800"
            >
                Submit
            </button>
        </form>
    );
};

export default Contact;
