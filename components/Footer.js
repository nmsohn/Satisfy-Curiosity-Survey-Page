import { Layout, Row, Col } from "antd";
import styled from "styled-components";
import _JSXStyle from "styled-jsx/style";

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
		<div>
			<div theme="dark" className="footer">
				<Row className="footer-row">
						<LeftCol span={8}>{leftColumn}</LeftCol>
						<CenterCol className="center-col" span={8}>
							{centerColumn}
						</CenterCol>
						<RightCol span={8}>{rightColumn}</RightCol>
					<style jsx>{`
						.footer {
							background-color: #fff;
							bottom: 0;
							display: -webkit-box;
							display: -webkit-flex;
							display: -ms-flexbox;
							display: flex;
							overflow: visible;
							text-align: center;
						}
					`}</style>
				</Row>
			</div>
		</div>
	);
};
