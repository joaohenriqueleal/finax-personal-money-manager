interface MainProps {
    children: React.ReactNode
    extraStyles?: string
}


export default function Main({ children, extraStyles } : MainProps ) {
    return (
        <main className={`${extraStyles} w-full`}>
            {children}
        </main>
    )
}
