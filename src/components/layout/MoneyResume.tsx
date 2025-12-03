import { useState, useEffect } from "react"

import SelectMovimentationType from "../form/SelectMovimentationType"
import Title from "../ui/Title"

import convertTimeToTimestamp from "../../utils/convertTimeToTimestamp"
import formatPrice from "../../utils/formatPrice"
import { FaSackDollar } from "react-icons/fa6"


import type { Movimentation } from "../../types/Movimentation"
import type { Time } from "../../types/Time"

interface MoneyResumeProps {
    movimentations: Movimentation[]
    time: Time
}


export default function MoneyResume({ movimentations, time } : MoneyResumeProps ) {
    const [selectedMovType, setSelectedMovType] = useState<string>("Total")
    const [textColor, setTextColor] = useState<string>('text-white')
    
    const getUserBalance = (): number => {
        const timestampSelected: number = convertTimeToTimestamp(time)

        return movimentations
            .filter(m => m.createdAt <= timestampSelected)
            .reduce((sum, mov) => sum + mov.value, 0)
    }

    useEffect(() => {
        if (selectedMovType == 'Total') setTextColor('text-white')
        else if (selectedMovType == 'Entradas') setTextColor('text-green-400')
        else { setTextColor('text-red-200') }
    }, [selectedMovType])

    return (
        <div className={`flex flex-col ${textColor}`}>
            <div className="flex gap-2 items-center">
                <FaSackDollar size={24} />
                <SelectMovimentationType
                    setSelectedMovType={setSelectedMovType}
                />
            </div>
            <div>
                <Title
                    text={`R$ ${formatPrice(getUserBalance())}`}
                    extraStyles="text-center"    
                />
            </div>
        </div>
    )
}
