interface InputProps {
    handleChange: (value: string) => void
    inputType: React.HTMLInputTypeAttribute
    inputElementId: string
    placeholder: string
    label: string
}


export default function Input(
    { inputElementId, label, inputType, placeholder, 
        handleChange} : InputProps ) {
    return (
        <div className="flex flex-col gap-2">
            <label
                className="text-gray-600 font-bold"
                htmlFor={inputElementId}
            >
                {label}
            </label>
            <input
                className="p-4 bg-gray-100 w-full border-3 border-gray-200
                    shadow hover:shadow-none transition duration-300 rounded"
                onChange={(e) => handleChange(e.target.value)}
                placeholder={placeholder}
                id={inputElementId}
                type={inputType}
            />
        </div>
    )
}
