import { useEffect, useRef, useState } from "react"
import { FaCaretDown } from "react-icons/fa"

interface SelectMovimentationTypeProps {
    setSelectedMovType: React.Dispatch<React.SetStateAction<string>>
}

export default function SelectMovimentationType({ setSelectedMovType }: SelectMovimentationTypeProps) {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState("Total")

    const ref = useRef<HTMLDivElement>(null)

    const widths: Record<string, string> = {
        Total: "w-17",
        Entradas: "w-27",
        Saídas: "w-22"
    }

    const handleSelect = (val: string) => {
        setSelected(val)
        setSelectedMovType(val)
        setOpen(false)
    }

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <div ref={ref} className="relative">
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className={`
                    ${widths[selected]}
                    text-xl font-bold flex
                    rounded-xl px-3 py-1.5
                    gap-1 items-center justify-between
                    transition-all w-max cursor-pointer
                `}
            >
                {selected}
                <FaCaretDown
                    className={`transition-transform duration-300
                            ${open ? "rotate-180" : ""}`}
                    size={20}
                />
            </button>
            <div
                className={`
                    absolute left-0 mt-2 bg-white border border-gray-200
                    shadow-lg rounded-xl overflow-hidden z-50
                    transition-all duration-150 origin-top
                    ${open ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}
                `}
            >
                {["Total", "Entradas", "Saídas"].map(type => (
                    <div
                        key={type}
                        onClick={() => handleSelect(type)}
                        className="
                            px-3 py-2 text-lg cursor-pointer font-semibold
                            text-black hover:bg-gray-100 transition
                        "
                    >
                        {type}
                    </div>
                ))}
            </div>
        </div>
    )
}
