import Head from "next/head";
import { Layout, Button } from "antd";
import Header from "../../components/Header";
import Hero from "../Hero/Hero";
import { Container } from "../../components/StyledComponents";
import Feature from "../Feature/Feature";
import Contact from "../Contact/Contact";
import Team from "../Team/Team";
import { FullPage, Slide } from 'react-full-page';
import styled from "styled-components";
import Footer from "../../components/Footer";

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
	<Container className="container">
		<Header leftColumn={<Menu>SkillShareNZ</Menu>} rightColumn={<CallToAction size="large">Contact Us</CallToAction>} />
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
				</Slide>
			</FullPage>
		</Main>
		<Footer centerColumn={<Menu>@SkillShareNZ</Menu>} />
	</Container>
);
