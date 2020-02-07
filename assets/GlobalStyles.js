import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { theme } from "styled-tools";

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Anton&display=swap');
	@import url('https://fonts.googleapis.com/css?family=Anton&display=swap');
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
		line-height: 20px;
		color: #000;
		font-size: 1em;
		line-height: 20px;
		word-wrap: break-word;
		-webkit-text-size-adjust: 100%;
		-webkit-font-smoothing: antialiased;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, Oxygen, "Segoe UI", Roboto, Ubuntu, noto, Cantarell,
		"Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
		scrollbar-color: #495460 rgba(255, 255, 255, 0);
		scrollbar-width: thin;
		background-color: #000;
	}
`;
export default GlobalStyle;
