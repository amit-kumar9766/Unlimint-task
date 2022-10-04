import React, { memo } from 'react'
import './input.css'

interface InputProps {
  className?: string
  label?: string
  placeholder?: string
  addOnBefore?: React.ReactNode | React.ReactNode[]
  value?: string
  setValue?: (arg: string) => void
  disabled?: boolean
}

const Input = (props: InputProps) => {
  const {
    label,
    placeholder = 'Click to Enter',
    addOnBefore,
    value,
    setValue,
    disabled = false,
  } = props
  const onInputChange = (event: React.SyntheticEvent) => {
    const { value: userInput } = event.target as HTMLInputElement
    setValue?.(userInput)
  }
  return (
    <div className="inputWrapper">
      {label && (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label htmlFor="input">
          <h5>{label}</h5>
        </label>
      )}
      <div className="input-addon">
        {addOnBefore}
        <input
          disabled={disabled}
          id="input"
          placeholder={placeholder}
          value={value}
          onChange={onInputChange}
          className="input"
        />
      </div>
    </div>
  )
}
export default Input
