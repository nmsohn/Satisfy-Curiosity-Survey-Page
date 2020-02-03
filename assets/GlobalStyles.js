import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
// import { theme } from "styled-tools";

const GlobalStyle = theme => createGlobalStyle`
	${reset}
	body {
		margin: 0;
		min-height: 100%;
		font-size: 14px;
		line-height: 20px;
		color: ${theme.colors.primary.black};
		background: #000;
		font-family: 'Montserrat', sans-serif;
		font-size: 1em;
		line-height: 20px;
		word-wrap: break-word;
		-webkit-text-size-adjust: 100%;
		-webkit-font-smoothing: antialiased;
		font-size: 14px;
		scrollbar-color: #495460 rgba(255, 255, 255, 0);
		scrollbar-width: thin;
	}
`;
export default GlobalStyle;
