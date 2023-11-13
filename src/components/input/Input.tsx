import './Input.module.css'
import { forwardRef } from 'react'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    className?: string,
    id: string,
    type: string,
    label: string,
    placeholder?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, id, type, label, placeholder, ...inputProps }, ref) => {
    return(
        <>
            <label htmlFor={id}>{label}
                <input
                    className={className}
                    type={type}
                    placeholder={placeholder}
                    min="0"
                    step="0.01"
                    id={id}
                    name="form-input"
                    ref={ref}
                    {...inputProps}
                />
            </label>
        </>
    )
})