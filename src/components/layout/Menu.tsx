import { useState } from 'react'

import NavBar from './NavBar'

import { FaList } from "react-icons/fa"

interface MenuProps {
    setAuth: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Menu({ setAuth } : MenuProps ) {
    const [showNavBAr, setShowNavBAr] = useState<boolean>(false)

    return (
        <>
            <div
                className='hover:bg-brand-darkest p-3 h-min rounded-full
                    cursor-pointer transition duration-300'
                onClick={() => setShowNavBAr(true)}
            >
                <FaList size={24} />
            </div>
            {showNavBAr && (
                <NavBar
                    setShow={setShowNavBAr}
                    setAuth={setAuth}
                />
            )}
        </>
    )
}
