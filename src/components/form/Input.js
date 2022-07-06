import style from './Input.module.css'

function Input ({type, text, name, placeholder, handleOnChange, value}) {
    return (
        <div className={style.form_control}>
            <label htmlFor={name}>{text}</label>
            <input id={name} name={name} type={type} placeholder={placeholder}/>
        </div>
    )
}

export default Input