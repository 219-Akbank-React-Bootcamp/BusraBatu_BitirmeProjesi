import React, { useState} from 'react'
import { Styled } from './Checkbox.styled'


const Checkbox = (props) => {
  const [value, setValue] = useState(
    props.defaultValue || props.value || false
  )

  const handleChange = (e) => {
    const v = e.target.checked
    setValue(v)
    props.onChange?.(e, v)
  }

  return (
    <Styled onClick={() => setValue((prev) => !prev)}>
      <input onChange={handleChange} type="checkbox" checked={value} />
      <div>
        <div className="checkbox-container">
          {value ? (
            <span className="material-symbols-outlined check-icon">check</span>
          ) : null}
        </div>
      </div>
      {props.label ? <span className="label">{props.label}</span> : null}
    </Styled>
  )
}

export default Checkbox
