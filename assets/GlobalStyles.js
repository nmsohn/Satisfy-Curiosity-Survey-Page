import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { theme } from "styled-tools";

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
	${reset}
	* {
        box-sizing : border-box;
    }
	html {
		background-color: #000;
	}
	body {
		margin: 0;
		min-height: 100%;
		font-size: 14px;
		line-height: 20px;
		color: ${theme("colors.primary", "black")};
		font-size: 1em;
		line-height: 20px;
		word-wrap: break-word;
		-webkit-text-size-adjust: 100%;
		-webkit-font-smoothing: antialiased;
		font-size: 14px;
		scrollbar-color: ${theme("colors.primary", "gray")} rgba(255, 255, 255, 0);
		scrollbar-width: thin;
		font-family: "Montserrat";
	}
`;
export default GlobalStyle;
