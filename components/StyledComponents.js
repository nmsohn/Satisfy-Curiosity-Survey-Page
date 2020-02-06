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

export const Section = styled.div`
	 {
		display: flex;
		position: relative;
		${"" /* margin-top: 72px; */} left: 0%;
		top: 0%;
		right: 0%;
		bottom: auto;
		z-index: 2;
		min-height: 80vh;
		align-items: center;
		display: flex;
		padding-right: 32px;
		padding-left: 32px;
		-webkit-box-align: center;
		background-image: linear-gradient(180deg, #0f0e19, #0f0e19 80%, #484754);
	}
`;
