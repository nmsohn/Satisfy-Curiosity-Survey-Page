import { Layout, Row, Col } from "antd";
import styled from "styled-components";
const Footer = Layout;

const StyledHeader = styled(Footer)`
	 {
		backgroundcolor: ${({ theme }) => theme.colors.primary};
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
		textalign: "center";
		fontweight: 600;
		texttransform: "uppercase";
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
