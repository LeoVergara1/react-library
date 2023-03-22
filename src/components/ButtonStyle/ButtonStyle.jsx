import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = styled.div`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: white;
  background-color: ${(props) => props.backgroundColor};
  padding: 20px;
`
const ButtonStyle = ({ label, backgroundColor, ...props }) => {
  return (
    <Button {...props} backgroundColor={backgroundColor}>
      {label}
    </Button>
  )
}

ButtonStyle.defaultProps = {
  backgroundColor: '#1ea7fd'
}

ButtonStyle.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string
}

export default ButtonStyle
