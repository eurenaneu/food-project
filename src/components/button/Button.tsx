import { ButtonHTMLAttributes } from 'react'
import './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: String,
}

export function Button({ text, ...buttonProps } : ButtonProps){
    return(
        <>
            <button {...buttonProps}>{text.toUpperCase()}</button>
        </>
    )
}