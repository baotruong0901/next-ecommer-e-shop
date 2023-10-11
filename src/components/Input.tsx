'use client'

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
    id: string,
    label: string,
    disabled?: boolean,
    required?: boolean,
    type?: string,
    customForm: UseFormRegister<FieldValues>,
    errors: FieldErrors

}


const Input = ({ id, label, disabled, required, type, customForm, errors }: Props) => {
    return (
        <div className="w-full relative">
            <input
                disabled={disabled}
                id={id}
                autoComplete="off"
                {...customForm(id, { required })}
                placeholder=""
                type={type}
                className={`
                    w-full 
                    py-2 px-4 pt-6
                    outline-none 
                    border-2
                    rounded-md
                    transition
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                    peer
                    bg-white
                    font-light
                    ${errors[id] ? 'border-rose-400 focus:border-rose-400' : 'border-slate-300 focus:border-slate-300 '}
                `}
            />
            {errors[id] && <p className="text-sm text-rose-500">Please enter your {id}.</p>}
            <label className={`absolute cursor-text text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 ${errors[id] ? 'text-rose-500' : 'text-slate-400'}`}
                htmlFor={id}>{label}
            </label>
        </div>
    );
}

export default Input;