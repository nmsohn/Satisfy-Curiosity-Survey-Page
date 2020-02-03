import Head from "next/head";
import { Layout, Row, AutoComplete } from "antd";
import Header from "../../components/Header";
import Hero from "../Hero/Hero";
import { Container } from "../../components/StyledComponents";

const { Content } = Layout;

export default ({ data }) => (
	<Container>
		<Header leftColumn={<h4>Logo</h4>} centerColumn={<h4>Page Name</h4>} rightColumn={<h4>Menu</h4>} />
		<Content>
			<Hero />
		</Content>
	</Container>
);
