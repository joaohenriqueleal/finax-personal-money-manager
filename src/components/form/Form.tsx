interface FormProps {
    children: React.ReactNode
    extraStyles?: string
}


export default function Form({ children, extraStyles } : FormProps ) {
    return (
        <form className={`${extraStyles} flex flex-col gap-12`}>
            {children}
        </form>
    )
}
