import { useState } from "react"
import APIUsers from "../../services/api/APIusers"

import Message from "../windows/Message"
import Button from "../form/Button"

interface ButtonCreateUserProps {
    username: string
    password: string
}


export default function ButtonCreateUser({ username, password } : ButtonCreateUserProps ) {
    const [showMessage, setShowMessage] = useState(false)
    const [messageToShow, setMessageToShow] = useState<string>('')
    const apiUsers = new APIUsers()
    
    const createNewUser = (e: React.MouseEvent) => {
        e.preventDefault()

        const response = apiUsers.createNewUser({
            createdAt: Date.now(),
            name: username,
            password
        })

        setMessageToShow(response.success || response.error || '')
        setShowMessage(true)
    }

    return (
        <>
            <Button
                extraStyles="w-full border-3 border-green-700 p-4 rounded font-bold
                    text-green-700 outline-2 outline-green-400 shadow shadow-green-900
                    cursor-pointer hover:text-white hover:bg-green-700 transition
                    duration-300"
                handleClick={createNewUser}
                text="Crie sua conta"
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
