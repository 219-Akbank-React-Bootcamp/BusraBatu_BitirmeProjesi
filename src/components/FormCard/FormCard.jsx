import React from 'react'
import { Styled } from './FormCard.styled'

const FormCard = (props) => {
  return (
    <Styled>
    <h1>{props.title}</h1>

    {props.children}

    
  </Styled>
  )
}

export default FormCard