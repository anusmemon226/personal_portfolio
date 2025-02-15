import React from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

type registerType = { name: string, email: string, subject: string, message: string }

type fieldType = {
    label: string,
    fieldType: string,
    placeholder: string,
    register: UseFormRegister<registerType>
    error: FieldError | undefined
}

const FormField = ({ label, fieldType, placeholder, register, error }: fieldType) => {
    return (
        <div className='flex flex-col py-2'>
            <label htmlFor={label} className='py-2 font-bold'>{label}<span className='text-red-500'>*</span></label>
            <input id={label} {...register(label.toLowerCase() as keyof registerType)} type={fieldType} placeholder={placeholder} className='focus:outline-none border border-gray-400 p-2 rounded' />
            {error && <span className='text-red-600'>{error.message}</span>}
        </div>
    )
}

export default FormField