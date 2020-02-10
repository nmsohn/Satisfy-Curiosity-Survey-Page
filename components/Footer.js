import { Layout, Row, Col } from "antd";
import styled from "styled-components";
import _JSXStyle from "styled-jsx/style";
import Wave from 'react-wavify';

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

const WaveBackground = () => (
	<Wave fill='url(#gradient3)'
			paused={false}
			opacity={0.4}
			options={{
			height: 1,
			amplitude: 40,
			speed: 0.15,
			points: 3
			}}
	>
		<defs>
			<linearGradient id="gradient3" gradientTransform="rotate(120)">
				<stop offset="10%" stopColor="#007991" />
				<stop offset="90%" stopColor="#78ffd6" />
			</linearGradient>
		</defs>
	</Wave>
	);


export default ({ centerColumn, rightColumn, leftColumn }) => {
	return (
		<div>
			<StyledFooter theme="dark" className="footer">
				<Row className="footer-row">
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
						.footer-row.ant-row{
							position: absolute;
							width: 100%;
							z-index: 2;
						}
					`}</style>
				</Row>
				<WaveBackground/>
			</StyledFooter>
		</div>
	);
};
