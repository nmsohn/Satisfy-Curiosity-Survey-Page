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
		<Head>
			<title>NZSkillShare - Talents meet Curiosity</title>
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
		</Container>
	</>
);
