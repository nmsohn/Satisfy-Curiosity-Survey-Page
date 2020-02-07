import Head from "next/head";
import { Layout, Button } from "antd";
import Header from "../../components/Header";
import Hero from "../Hero/Hero";
import { Container } from "../../components/StyledComponents";
import Feature from "../Feature/Feature";
import Feature2 from "../Feature2/Feature2";
import { FullPage, Slide } from 'react-full-page';
import styled from "styled-components";

const { Content } = Layout;

const Main = styled(Content)`
	height: 1903px;
`;

const Menu = styled.h4`
	color: #fff;
`;

const CallToAction = styled(Button)`
	{
		background-color: #9800FF;
		border: 0;
		color: #fff;
		font-size: 16px;
	}
`;

//TODO: 한 화면 단위 스크롤 적용하기
export default ({ data }) => (
	<Container className="container">
		<Header leftColumn={<Menu>SkillShareNZ</Menu>} rightColumn={<CallToAction size="large">Join Newsletter</CallToAction>} />
		<Main>
			<FullPage>
				<Slide>
					<Hero />
				</Slide>
				<Slide>
					<Feature />
				</Slide>
				<Slide>
					<Feature2 />
				</Slide>
				<Slide>

				</Slide>
			</FullPage>
		</Main>
	</Container>
);
