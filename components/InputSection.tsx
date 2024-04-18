import React, { Dispatch, SetStateAction, useState } from 'react'

interface InputSectionProps {
    title: string;
    placeholder: string;
    data: string[];
    setData:  Dispatch<SetStateAction<string[]>>;
}

function InputSection({ setData, title, placeholder, data }: InputSectionProps) {
  const [inputValue, setInputValue] = useState("");
  
  const handleAddClick = () => {
    if (inputValue.trim() !== "") {
        setData((prevData) => [...prevData, inputValue]);
        setInputValue("");
    }
  };

  const handleRemoveItem = (index: number) => {
    setData((prevData) => prevData.filter((_,idx) => idx !== index))
  };

  return <div className="mb-4">
    <h2 className="text-xl font-bold">{title}</h2>
    <div className="flex items-center mt-2">
        <input 
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={placeholder}
            className="p-2 border border-gray-300 rounded mr-2 flex-grow "
        />
        <button 
            onClick={handleAddClick}
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
        >
            Add
        </button>
    </div>
    <ul>
        {data.map((item, index) => (
            <li key={index} className='flex items-center justify-between p-2 border-b border-gray-300'><span>{item}</span>
            <button 
                onClick={()=> handleRemoveItem(index)} 
                className='text-red-500 hover:text-red-700'>X
            </button>
            </li>
        ))}
    </ul>
    </div>
}

export default InputSection