import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import styled from "styled-components";

export default class Heading extends Component {
    
    render() {
        const HeadingContainer = styled.div``;

        const Heading = styled.h2`
            {
                position: static;
                left: 0%;
                right: 0%;
                bottom: auto;
                display: inline-block;
                height: auto;
                margin-top: 0px;
                margin-right: 10px;
                margin-bottom: 0px;
                font-family: Anton;
                color: #fff;
                font-size: 96px;
                line-height: 86px;
                font-weight: 300;
                text-align: left;
                text-decoration: none;
            }
        `;
        const title = this.props.title;

        return (
            <HeadingContainer>
                <Heading
                    className="heading"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                >
                    {title}
                </Heading>
			</HeadingContainer>
        )
    }
}

