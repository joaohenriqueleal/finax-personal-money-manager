import { useState } from "react"
import APIUsers from "../../services/api/APIusers"

import Message from "../windows/Message"
import Button from "../form/Button"

interface ButtonLoginUserProps {
    setAuth: React.Dispatch<React.SetStateAction<boolean>>
    username: string
    password: string
}


export default function ButtonLoginUser({ setAuth, username, password } : ButtonLoginUserProps ) {
    const [showMessage, setShowMessage] = useState(false)
    const [messageToShow, setMessageToShow] = useState<string>('')
    const apiUsers = new APIUsers()
    
    const loginUser = (e: React.MouseEvent) => {
        e.preventDefault()

        const response = apiUsers.loginUser({
            name: username,
            password
        })
        
        if (response.success) {
            setAuth(true)
            return
        }
        setMessageToShow(response.success || response.error || '')
        setShowMessage(true)
    }

    return (
        <>
            <Button
                extraStyles="w-full p-4 rounded font-bold cursor-pointer text-white
                    bg-green-300 transition duration-300 hover:bg-green-700"
                handleClick={loginUser}
                text="Entrar na minha conta"
            />
            {showMessage && (
                <Message
                    setShow={setShowMessage}
                    message={messageToShow}
                />
            )}
        </>
    )
}
