import styled from 'styled-components'
import { theme } from "styled-tools"

const Section = styled.div`
  margin: auto;
  font-family: "sans-serif";
  text-align: center;

  @media ${theme(device), "laptop"} {  // -> "@media (min-width: ${theme(size), "laptop"})" -> "@media (min-width: 1024px)"
    max-width: 800px;
  }

  @media ${theme(device), "desktop"} {
    max-width: 1400px;
  }
`

export default Section