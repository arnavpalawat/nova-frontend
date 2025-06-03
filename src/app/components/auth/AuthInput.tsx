import React, {JSX} from 'react';

interface AuthInputProps {
    label: string;
    type: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
}

export default function AuthInput({
                                      label,
                                      type,
                                      value,
                                      onChange,
                                      placeholder,
                                      required,
                                  }: AuthInputProps): JSX.Element {
    return (
        <div>
            <label className="block mb-1 text-sm font-medium text-[#FFF]">{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="w-full px-4 py-2 text-[#FFF] bg-transparent border border-gray-500 rounded-xl focus:outline-none"
            />
        </div>
    );
}
