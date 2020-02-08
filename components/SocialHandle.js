import React, { Component } from 'react';
import { FacebookSquare } from 'styled-icons/boxicons-logos/FacebookSquare';
import styled from "styled-components";
import { Col } from "antd";

const SocialCol = styled(Col)`
{
    width: 100%;
}
`;

const FacebookIcon = styled(FacebookSquare)`
    margin: 0 auto;
    align-items: center;
    display: flex;
    color: "#fff";
    font-size: "30px";
`;

export default class SocialHandle extends Component {
    render() {
        return (
            <SocialCol span={24}>
                <FacebookIcon />
            </SocialCol>
        )
    }
}
