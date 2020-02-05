import styled from "styled-components";
import { theme } from "styled-tools";

export const Container = styled.div`
  margin: auto;
  color: ${theme("colors.primary", "white")}
  backgroundcolor: ${theme("colors.primary", "black")};
  @media ${theme("device", "laptop")} {  // -> "@media (min-width: ${theme(
	"size",
	"laptop"
)})" -> "@media (min-width: 1024px)"
    max-width: 800px;
  }

  @media ${theme("device", "desktop")} {
    max-width: 1400px;
  }
`;
