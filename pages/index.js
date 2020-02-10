import Head from "next/head";
import { Layout, Button } from "antd";
import Header from "../components/Header";
import Hero from "./Hero/Hero";
import { Container } from "../components/StyledComponents";
import Feature from "./Feature/Feature";
import Contact from "./Contact/Contact";
import Team from "./Team/Team";
import { FullPage, Slide } from "react-full-page";
import styled from "styled-components";
import Footer from "../components/Footer";
import _JSXStyle from "styled-jsx/style";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link, Element, animateScroll as scroll } from "react-scroll";

const { Content } = Layout;

const Main = styled(Content)`
	height: 1903px;
`;

const Menu = styled.h4`
	color: #000;
`;

export default ({ data }) => (
	<>
		<Head>
			<title>NZSkillShare - Talents meet Curiosity</title>
		</Head>
		<Container className="container">
			<Header
				leftColumn={<h4 style={{ fontSize: "16px" }}>NZSkillShare</h4>}
				rightColumn={
					<a className="cta" href="https://tinyurl.com/nzskillshare2">
						Take a survey
					</a>
				}
			/>
			<Main>
				<Element name="test1" className="element">
					<Hero />
				</Element>
				<Element name="test2" className="element">
					<Feature />
				</Element>
				<Element name="test3" className="element">
					<Team />
				</Element>
				<Element name="test4" className="element">
					<Contact />
				</Element>

				<Footer centerColumn={<h4 className="copy-rights">@NZSkillShare</h4>} />
			</Main>
			<style jsx>
				{`
					a {
						cursor: pointer;
						text-decoration: none;
						color: rgb(16, 16, 16);
						background-image: linear-gradient(120deg, rgb(46, 199, 192) 0%, rgb(26, 134, 228) 100%);
						background-repeat: no-repeat;
						font-weight: bold;
						background-size: 100% 0.2em;
						background-position: 0px 100%;
						transition: background-size 0.25s ease-in 0s;
					}
					a:hover {
						background-size: 100% 88%;
						color: white;
					}
					.copy-rights {
						margin: 0 auto;
						text-align: center;
					}
				`}
			</style>
		</Container>
	</>
);
