import { Layout, Row, Col } from "antd";
import styled from "styled-components";
import { theme } from "styled-tools";
const Header = Layout;

const StyledHeader = styled(Header)`
	 {
		backgroundcolor: ${theme("colors.primary", "white")};
		marginbottom: 25px;
	}
`;

const RightCol = styled(Col)`
	 {
		textalign: "right";
	}
`;

const LeftCol = styled(Col)`
	 {
		textalign: "left";
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
				<LeftCol span={6}>{leftColumn}</LeftCol>
				<CenterCol span={12}>{centerColumn}</CenterCol>
				<RightCol span={6}>{rightColumn}</RightCol>
			</Row>
		</StyledHeader>
	);
};
