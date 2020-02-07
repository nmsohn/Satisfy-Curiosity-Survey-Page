import { Layout, Row, Col } from "antd";
import styled from "styled-components";
import { theme } from "styled-tools";

const StyledHeader = styled.div`
	 {
		color: ${theme("colors.primary", "white")};
		margin-bottom: 25px;
		position: -webkit-sticky;
		position: sticky;
		top: 0px;
		z-index: 99998;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		overflow: visible;
		height: 72px;
		background-image: -webkit-gradient(linear, left top, left bottom, from(#000), to(transparent));
		background-image: linear-gradient(180deg, #000, transparent);
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

const NavBar = styled(Row)`
background-image: linear-gradient(180deg, #000, transparent);
`;

export default ({ centerColumn, rightColumn, leftColumn }) => {
	return (
		<StyledHeader theme="dark" className="navbar" mode="horizontal">
			<NavBar>
				<LeftCol span={6}>{leftColumn}</LeftCol>
				<CenterCol span={12}>{centerColumn}</CenterCol>
				<RightCol span={6}>{rightColumn}</RightCol>
			</NavBar>
		</StyledHeader>
	);
};
