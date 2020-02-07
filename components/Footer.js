import { Layout, Row, Col } from "antd";
import styled from "styled-components";
const Footer = Layout;

const StyledHeader = styled(Footer)`
	 {
		backgroundcolor: #000;
		margintop: 25px;
	}
`;

const LeftCol = styled(Col)`
	 {
		textalign: "left";
	}
`;

const RightCol = styled(Col)`
	 {
		textalign: "right";
	}
`;

const CenterCol = styled(Col)`
	 {
		text-align: "center";
		font-weight: 600;
		text-transform: "uppercase";
	}
`;

export default ({ centerColumn, rightColumn, leftColumn }) => {
	return (
		<StyledHeader theme="dark" className="header">
			<Row>
				<LeftCol span={8}>{leftColumn}</LeftCol>
				<CenterCol span={8}>{centerColumn}</CenterCol>
				<RightCol span={8}>{rightColumn}</RightCol>
			</Row>
		</StyledHeader>
	);
};
