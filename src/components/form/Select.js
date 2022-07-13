import style from './Select.module.css'

function Select({ text, name, options, handleOnChange, value }) {
  return (
    <div className={style.form_control}>
      <label htmlFor={name}>{text}</label>
      <select
        id={name}
        name={name}
        onChange={handleOnChange}
        value={value || ''}
      >
        <option>Seleciona a categoria</option>
        {options.map((option) => (
          <option
            value={option.id}
            key={option.id}
          >
            {option.nome}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select