import React from 'react';
import { FacebookSquare } from 'styled-icons/boxicons-logos/FacebookSquare';
import { Mail } from 'styled-icons/material/Mail';
import styled from 'styled-components';
import { Col } from 'antd';
import _JSXStyle from 'styled-jsx/style';

const SocialCol = styled(Col)`
	 {
		width: 100%;
		display: flex;
	}
`;

const FacebookIcon = styled(FacebookSquare)`
	color: '#000';
`;

const MailIcon = styled(Mail)`
	color: '#000';
	padding-left: 5px;
`;

export default function SocialHandle() {
	return (
		<SocialCol span={24}>
			<div className="icon-container">
				<a href="https://tinyurl.com/wellingtonskillshare" style={{ color: '#000' }}>
					<FacebookIcon size={38} />
				</a>
				<a href="mailto:skillsharenz@gmail.com" style={{ color: '#000' }}>
					<MailIcon size={40} />
				</a>
				<style jsx>
					{`
						.icon-container {
							margin: 20px auto;
							align-items: center;
							text-align: center;
							margin: 0 auto;
						}
						@media (max-width: 480px) {
							.icon-container {
								margin-top: 40px;
							}
						}
					`}
				</style>
			</div>
		</SocialCol>
	);
}
