interface PageContainerProps {
    children: React.ReactNode
    extraStyles?: string
}


export default function PageContainer({ children, extraStyles } : PageContainerProps ) {
    return (
        <div className={`${extraStyles} h-full w-full`}>
            {children}
        </div>
    )
}
