const colors = {
	primary: {
		blue: "#0070f3",
		white: "#0070f3",
		black: "#333",
		gray: "#495460"
	}
};

const fontSizes = ["1.2rem", "1.4rem", "1.6rem", "1.8rem", "2.4rem", "2.8rem", "3.2rem", "4.0rem", "4.8rem", "6.4rem"];
const space = ["0", ".4rem", ".8rem", "1.2rem", "1.6rem", "2.0rem", "3.2rem", "4.8rem", "6.4rem", "9.6rem"];

const mediaSizes = {
	mobileS: "320px",
	mobileM: "375px",
	mobileL: "425px",
	tablet: "768px",
	laptop: "1024px",
	laptopL: "1440px",
	desktop: "2560px"
};

const device = {
	mobileS: `(min-width: ${mediaSizes.mobileS})`,
	mobileM: `(min-width: ${mediaSizes.mobileM})`,
	mobileL: `(min-width: ${mediaSizes.mobileL})`,
	tablet: `(min-width: ${mediaSizes.tablet})`,
	laptop: `(min-width: ${mediaSizes.laptop})`,
	laptopL: `(min-width: ${mediaSizes.laptopL})`,
	desktop: `(min-width: ${mediaSizes.desktop})`,
	desktopL: `(min-width: ${mediaSizes.desktop})`
};

const theme = {
	colors,
	fontSizes,
	mediaSizes,
	device,
	space
};

export default theme;
