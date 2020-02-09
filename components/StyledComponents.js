import styled from "styled-components";
import { theme } from "styled-tools";

export const Container = styled.div`
  margin: auto;
  color: #000;
  background-color: #fff;
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

export const Section = styled.div`
	 {
		display: flex;
		position: relative;
		left: 0%;
		top: 0%;
		right: 0%;
		bottom: auto;
		z-index: 2;
		display: flex;
		padding-right: 32px;
		padding-left: 32px;
		background-color: #fff;
		color: #000;
		min-height: 80vh;
	}
`;
