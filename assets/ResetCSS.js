import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = (theme) => createGlobalStyle`
  ${reset}
  /* other styles */
`
export default GlobalStyle;
