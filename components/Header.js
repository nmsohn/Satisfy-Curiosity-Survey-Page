import { Row, Col } from 'antd';
import styled from 'styled-components';

const StyledHeader = styled.div`
	width: 100%;
	margin-bottom: 10px;
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
`;

const LeftCol = styled(Col)`
	text-align: left;
	text-transform: uppercase;
	top: 50%;
	-ms-transform: translateY(-50%);
	transform: translateY(-50%);
	font-size: 20px;
	font-weight: bold;
`;

const RightCol = styled(Col)`
	text-align: right;
	top: 50%;
	-ms-transform: translateY(-50%);
	transform: translateY(-50%);
	text-transform: uppercase;
`;

const NavBar = styled(Row)`
	width: 100%;
	background-image: -webkit-gradient(linear, left top, left bottom, from(#fff), to(transparent));
	background-image: linear-gradient(180deg, #fff, transparent);
	height: 72px;
	padding-top: 0px;
	padding-right: 12px;
	padding-left: 12px;
	margin: 0 auto;
`;

const Header = ({ centerColumn, rightColumn, leftColumn }) => {
	return (
		<StyledHeader theme="dark" className="navbar" mode="horizontal">
			<NavBar>
				<LeftCol span={12}>{leftColumn}</LeftCol>
				<RightCol span={12}>{rightColumn}</RightCol>
			</NavBar>
		</StyledHeader>
	);
};

Header.displayName = 'Header';
export default Header;
