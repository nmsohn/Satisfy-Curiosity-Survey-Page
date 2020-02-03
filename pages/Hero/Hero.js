import React, { Component } from 'react'
import { Layout } from "antd"
import Typewriter from 'typewriter-effect'
import styled from 'styled-components'

const Title = styled.h2`
	{
		display: block;
		margin-top: 0px;
		margin-bottom: 0px;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-flex: 0;
		-webkit-flex: 0 auto;
		-ms-flex: 0 auto;
		flex: 0 auto;
		font-size: 48px;
		line-height: 60px;
		font-weight: 300;
		text-align: center;
	}
`

const Section = styled(Layout)`
	{
		align-items: center;
		display: flex;
		padding-right: 32px;
		padding-left: 32px;
		-webkit-box-align: center;
	}
`

export default class Hero extends Component {
	render() {
		return (
			<Section className="section-hero">
					<Title>
						<span>Discover Local</span>
						<Typewriter
						onInit={(typewriter) => {
							typewriter.typeString('Lessons')
							.pauseFor(1500)
							.deleteAll()
							.typeString('Classes')
							.pauseFor(1500)
							.deleteAll()
							.typeString('Events')
							.start();
						}}
						/>
						<span>Today!</span>
					</Title>
			</Section>
		)
	}
}
