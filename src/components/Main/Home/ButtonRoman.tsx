interface ButtonRomanProps {
    ep: string;
    onClick: () => void;
}

const ButtonRoman = ({ ep, onClick }: ButtonRomanProps) => {
    return (
        <button
            onClick={onClick}
            className="mx-2 my-1 px-4 py-2 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-300 transition"
        >
            {ep}
        </button>
    );
};

export default ButtonRoman;
