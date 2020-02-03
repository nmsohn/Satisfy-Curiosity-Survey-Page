import Head from "next/head";
import { Layout, Row } from "antd";
import Header from "../../components/Header";
import Helmet from "react-helmet";
const { Content } = Layout;

export default ({ data }) => (
	<div>
		<Helmet title="Home | LAH" />
		<Header leftColumn={<h4>Logo</h4>} centerColumn={<h4>Page Name</h4>} rightColumn={<h4>Menu</h4>} />
		{/* <Content>

		</Content> */}
	</div>
);
