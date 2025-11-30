interface TitleProps {
    extraStyles?: string
    text: string
}


export default function Title({ text, extraStyles } : TitleProps ) {
    return (
        <h1 className={`${extraStyles} font-black text-2xl`}>
            {text}
        </h1>
    )
}
