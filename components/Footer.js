import { Layout, Row, Col } from "antd";
import styled from "styled-components";
import _JSXStyle from "styled-jsx/style";

const StyledFooter = styled.div`
	background-color: #fff;
	margin-top: 25px;
	bottom: 0;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	overflow: visible;
	height: 32px;
	text-align: center;
`;

const LeftCol = styled(Col)`
	textalign: left;
`;

const RightCol = styled(Col)`
	textalign: right;
`;

const CenterCol = styled(Col)`
	text-align: center;
	font-weight: 600;
	text-transform: uppercase;
	color: #000;
`;

export default ({ centerColumn, rightColumn, leftColumn }) => {
	return (
		<StyledFooter theme="dark" className="footer">
			<Row>
				<LeftCol span={8}>{leftColumn}</LeftCol>
				<CenterCol className="center-col" span={8}>
					{centerColumn}
				</CenterCol>
				<RightCol span={8}>{rightColumn}</RightCol>
				<style jsx>{`
					.footer {
						background-color: #fff;
						margin-top: 25px;
						bottom: 0;
						display: -webkit-box;
						display: -webkit-flex;
						display: -ms-flexbox;
						display: flex;
						overflow: visible;
						height: 32px;
						text-align: center;
					}
				`}</style>
			</Row>
		</StyledFooter>
	);
};
