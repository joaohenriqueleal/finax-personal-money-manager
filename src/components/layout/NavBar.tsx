import Globals from "../../shared/Globals"

import { Link } from "react-router-dom"
import { useRef } from "react"

import { FaSignOutAlt } from 'react-icons/fa'

interface NavBarProps {
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    setAuth: React.Dispatch<React.SetStateAction<boolean>>
}


export default function NavBar({ setShow, setAuth } : NavBarProps ) {
    const navRef = useRef<HTMLDivElement>(null)

    const unLogin = () => {
        localStorage.removeItem(Globals.actualUserStorage)
        Globals.authenticated = false
        setAuth(false)
    }

    const closeNavBar = () => {
            if (!navRef.current) return

            navRef.current.classList.remove("anim-nav-bar")
            navRef.current.classList.add("anim-nav-bar-close")

            navRef.current.addEventListener(
                "animationend",
                () => setShow(false),
                { once: true }
            )
    }

    return (
        <div
            className="fixed inset-0 h-screen w-screen bg-black/20 z-999
                backdrop-blur-[2px] overflow-hidden"
            onClick={closeNavBar}
        >
            <nav
                className="anim-nav-bar bg-brand-darkest h-full shadow-xl p-2"
                onClick={(e) => e.stopPropagation()}
                ref={navRef}
            >
                <button
                    className="nav-bar-link text-gray-300"
                    onClick={unLogin}
                >
                    <FaSignOutAlt /> Sair
                </button>
            </nav>
        </div>
    )
}
