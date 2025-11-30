import { useEffect, useState, useRef } from "react"

interface MessageProps {
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    message: string
}

export default function Message({ message, setShow }: MessageProps) {
    const [closing, setClosing] = useState(false)
    const [visible, setVisible] = useState(false)
    const [progress, setProgress] = useState(100)
    const containerRef = useRef<HTMLDivElement>(null!)

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 50)

        const duration = 5000
        const intervalTime = 50
        const decrement = (intervalTime / duration) * 100

        const interval = setInterval(() => {
            setProgress(p => {
                const next = p - decrement
                if (next <= 0) {
                    clearInterval(interval)
                    startClose()
                    return 0
                }
                return next
            })
        }, intervalTime)

        return () => {
            clearTimeout(timer)
            clearInterval(interval)
        }
    }, [])

    function startClose() {
        setClosing(true)
        containerRef.current?.classList.add("anim-popup-end")
        setTimeout(() => setShow(false), 300)
    }

    const percentage = progress

    return (
        <div
            ref={containerRef}
            className={`
                anim-popup
                p-4 w-64 fixed top-4 right-4
                bg-green-600/90 backdrop-blur-sm
                shadow-lg
                rounded
                text-white text-sm
                border border-green-500/40
                overflow-hidden
                ${visible && !closing ? "" : "opacity-0 translate-x-5"}
                transition-all duration-300
            `}
        >
            <button
                onClick={startClose}
                className="absolute top-2 right-2 text-white/80 hover:text-white transition"
            >
                ✕
            </button>

            <p className="pr-6 font-bold">{message}</p>

            <div className="w-full h-1 bg-green-900/40 mt-3 rounded-full overflow-hidden">
                <div
                    className="
                        h-full bg-white/90
                        transition-[width] duration-50 ease-linear
                    "
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    )
}
