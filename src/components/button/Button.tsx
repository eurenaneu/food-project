import './Button.module.css'

interface ButtonProps {
    text: String,
}

export function Button({ text } : ButtonProps){
    return(
        <>
            <button type="submit">{text.toUpperCase()}</button>
        </>
    )
}