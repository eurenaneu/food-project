import './Input.module.css'
import { forwardRef } from 'react'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    className?: string
    type: string,
    label: string,
    placeholder?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, label, placeholder, ...props }, ref) => {
    return(
        <>
            <label htmlFor="form-input">{label}
                <input
                    className={className}
                    type={type}
                    placeholder={placeholder}
                    min="0"
                    step="0.01"
                    id="form-input"
                    name="form-input"
                    ref={ref}
                    {...props}
                />
            </label>
        </>
    )
})