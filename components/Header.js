import { Layout, Row, Col } from "antd";
import styled from "styled-components";
import { theme } from "styled-tools";
const Header = Layout;

const StyledHeader = styled(Header)`
	 {
		color: ${theme("colors.primary", "black")};
		margin-bottom: 25px;
		position: sticky;
		top: 0px;
		z-index: 99998;
		display: flex;
		overflow: visible;
		height: 72px;
		background: ${theme("colors.primary", "white")};
	}
`;

const RightCol = styled(Col)`
	 {
		text-align: right;
	}
`;

const LeftCol = styled(Col)`
	 {
		text-align: left;
	}
`;

const CenterCol = styled(Col)`
	 {
		text-align: center;
		font-weight: 600;
		text-transform: uppercase;
	}
`;

export default ({ centerColumn, rightColumn, leftColumn }) => {
	return (
		<StyledHeader theme="dark" className="header" mode="horizontal">
			<Row>
				<LeftCol span={6}>{leftColumn}</LeftCol>
				<CenterCol span={12}>{centerColumn}</CenterCol>
				<RightCol span={6}>{rightColumn}</RightCol>
			</Row>
		</StyledHeader>
	);
};
