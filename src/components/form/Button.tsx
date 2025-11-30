interface ButtonProps {
    handleClick: (e: React.MouseEvent<HTMLButtonElement>, ...args: any[]) => any
    extraStyles?: string
    text: string
}


export default function Button({ text, handleClick, extraStyles } : ButtonProps ) {
    return (
        <button
            className={`${extraStyles}`}
            onClick={(e) => handleClick(e)}
        >
            {text}
        </button>
    )
}
