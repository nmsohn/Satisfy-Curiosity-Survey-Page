import { Layout, Row, Col } from "antd";
import styled from "styled-components";
import _JSXStyle from "styled-jsx/style";

const FooterRow = styled(Row)`
	width: 100%;
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
		<div className="footer-container">
			<div theme="dark" className="footer">
				<FooterRow className="footer-row">
					<LeftCol span={8}>{leftColumn}</LeftCol>
					<CenterCol className="center-col" span={8}>
						{centerColumn}
					</CenterCol>
					<RightCol span={8}>{rightColumn}</RightCol>
				</FooterRow>
			</div>
			<style jsx>{`
				.footer-container{
					position: absolute;
					margin: 0 auto;
					width: 100%;
					z-index: 2;
					margin-top: 80px;
				}
				.footer {
					bottom: 0;
					display: -webkit-box;
					display: -webkit-flex;
					display: -ms-flexbox;
					display: flex;
					overflow: visible;
					text-align: center;
				}
				.footer-row{
					width: 100%;
				}
				`}
			</style>
		</div>
	);
};
