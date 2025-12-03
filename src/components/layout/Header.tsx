import { motion } from "framer-motion"

import History from "../windows/History"
import MoneyResume from "./MoneyResume"
import Button from "../form/Button"
import Menu from "./Menu"

interface HeaderProps {
    setSelectedMovType: React.Dispatch<React.SetStateAction<string>>
    setAuth: React.Dispatch<React.SetStateAction<boolean>>
    selectedMovType: string
}

export default function Header({ setSelectedMovType, selectedMovType, setAuth } : HeaderProps ) {
    return (
        <header
            className="p-4 bg-brand-dark rounded-b-4xl flex flex-col
                text-white gap-2 pb-16 max-w-300 m-auto"
        >
            <div className="flex justify-between">
                <Menu setAuth={setAuth} />
                <MoneyResume movimentations={[]} time="1day" />
                <History />
            </div>

            <div
                className="w-full flex items-center justify-around font-black
                    text-lg relative"
            >

                <div className="relative">
                    <Button
                        extraStyles="cursor-pointer pb-1"
                        handleClick={() => setSelectedMovType('Despesas')}
                        text="DESPESAS"
                    />
                    {selectedMovType === 'Despesas' && (
                        <motion.div
                            layoutId="underline"
                            className="absolute bottom-0 left-0 right-0 h-[3px]
                                bg-white rounded-full"
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        />
                    )}
                </div>

                <div className="relative">
                    <Button
                        extraStyles="cursor-pointer pb-1"
                        handleClick={() => setSelectedMovType('Renda')}
                        text="RENDA"
                    />
                    {selectedMovType === 'Renda' && (
                        <motion.div
                            layoutId="underline"
                            className="absolute bottom-0 left-0 right-0 h-[3px]
                                bg-white rounded-full"
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        />
                    )}
                </div>

            </div>
        </header>
    )
}
