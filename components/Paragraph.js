import React, { Component } from 'react';
import styled from "styled-components";
import { Col } from "antd";

export default class Paragraph extends Component {
    render() {
        const Paragraph = styled.p`
            margin-top: 24px;
            margin-bottom: 0px;
            margin-right: 10px;
            padding-right: 24px;
            padding-left: 0px;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            color:
            #999;
            font-size: 19px;
            font-weight: 300;
            text-align: left;
            letter-spacing: 0.5px;
        `;

        const paragraph = this.props.paragraph;
        return (
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                <Paragraph
                    className="description"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                >
                    {paragraph}
            </Paragraph>
        </Col>
        )
    }
}