import { useState } from "react"

import Header from "../components/layout/Header"

interface HomeProps {
    setAuth: React.Dispatch<React.SetStateAction<boolean>>
}


export default function Home({ setAuth } : HomeProps ) {
    const [selectedMovType, setSelectedMovType] = useState<string>('Despesas')
    
    return (
        <div>
            <Header
                setSelectedMovType={setSelectedMovType}
                selectedMovType={selectedMovType}
                setAuth={setAuth}
            />
        </div>
    )
}
