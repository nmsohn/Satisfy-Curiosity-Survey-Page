import Head from 'next/head';
import Wave from 'react-wavify';
import { Layout } from 'antd';
import _JSXStyle from 'styled-jsx/style';
import Header from '../components/Header';
import Hero from './Hero/Hero';
import Feature from './Feature/Feature';
import Contact from './Contact/Contact';
import Team from './Team/Team';
import Footer from '../components/Footer';

const WaveBackground = () => (
	<Wave
		fill="url(#gradient3)"
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

export default function Index() {
	return (
		<Layout>
			<Head>
				<title>NZSkillShare - Talents meet Curiosity</title>
			</Head>
			<div className="container" id="container">
				<Header
					leftColumn={<h4 className="company-name">NZSkillShare</h4>}
					rightColumn={
						<a className="cta" href="https://tinyurl.com/nzskillshare2">
							Take a survey
						</a>
					}
				/>
				<div className="main">
					<section name="section2" className="section">
						<Hero />
					</section>
					<section name="section2" className="section">
						<Feature />
					</section>
					<section name="section3" className="section">
						<Team />
					</section>
					<section name="section4" className="section">
						<Contact />
						<Footer centerColumn={<h4 className="copy-rights">@NZSkillShare</h4>} />
						<WaveBackground />
					</section>
				</div>
				<style jsx>
					{`
						.container {
							margin: auto;
							color: #000;
							background-color: #fff;
							-webkit-box-sizing: border-box;
							box-sizing: border-box;
							min-width: 320px;
							width: 100vw;
							height: 100vh;
						}
						.company-name {
							font-size: '16px';
							font-weight: 'bold';
						}
						@media min-width: 1440px {
							// -> "@media (min-width: 1024px)" -> "@media (min-width: 1024px)"
							.container {
								max-width: 800px;
							}
						}
						@media min-width: 2560px {
							.container {
								max-width: 1400px;
							}
						}
						a {
							cursor: pointer;
							text-decoration: none;
							color: rgb(16, 16, 16);
							background-image: linear-gradient(120deg, rgb(46, 199, 192) 0%, rgb(26, 134, 228) 100%);
							background-repeat: no-repeat;
							font-weight: bold;
							background-size: 100% 0.2em;
							background-position: 0px 100%;
							transition: background-size 0.25s ease-in 0s;
						}
						a:hover {
							background-size: 100% 88%;
							color: white;
						}
						.copy-rights {
							margin: 0 auto;
							text-align: center;
							font-weight: 600;
							text-transform: uppercase;
							color: #fff;
						}
					`}
				</style>
			</div>
		</Layout>
	);
}
