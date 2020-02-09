import Head from "next/head";
import { Layout, Button } from "antd";
import Header from "../components/Header";
import Hero from "./Hero/Hero";
import { Container } from "../components/StyledComponents";
import Feature from "./Feature/Feature";
import Contact from "./Contact/Contact";
import Team from "./Team/Team";
import { FullPage, Slide } from 'react-full-page';
import styled from "styled-components";
import Footer from "../components/Footer";
import GlobalStyle from "../assets/GlobalStyles";

const { Content } = Layout;

const Main = styled(Content)`
	height: 1903px;
`;

const Menu = styled.h4`
	color: #fff;
`;

const CallToAction = styled.p`
	{
		color: #17ffa6;
		font-size: 16px;
	}
`;

export default ({ data }) => (
	<>
	<GlobalStyle />
		<Head>
			<title>NZSkillShare - Talents meet Curiosity</title>
			<style
				id='flashStyle'
				dangerouslySetInnerHTML={{
					__html: `
					*, *::before, *::after {
						transition: none!important;
					}
					`
				}}
				/>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
				/>
				<meta name="description" content="NZSkillShare" />
				<meta name="keywords" content="jobs, nz, private lessons, hobbies, gig economy, classes" />
				<link rel="manifest" href="/public/manifest.json" />
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
				/>
				<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
				<link rel="shortcut icon" href="/public/favicon.ico" />
				<link href="https://fonts.googleapis.com/css?family=Anton&display=swap" rel="stylesheet" />
		</Head>
		<Container className="container">
			<Header leftColumn={<Menu>NZSkillShare</Menu>} rightColumn={<CallToAction size="large"><a href="https://tinyurl.com/nzskillshare2" style={{color: "#17ffa6"}}>Take a survey</a></CallToAction>} />
			<Main>
				<FullPage>
					<Slide>
						<Hero />
					</Slide>
					<Slide>
						<Feature />
					</Slide>
					<Slide>
						<Team />
					</Slide>
					<Slide>
						<Contact />
						<Footer centerColumn={<Menu>@NZSkillShare</Menu>} />
					</Slide>
				</FullPage>
			</Main>
			<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
			<script> AOS.init();</script>
		</Container>
	</>
);
