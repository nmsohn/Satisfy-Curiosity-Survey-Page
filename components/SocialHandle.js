import React, { Component } from 'react'
import {Icon} from "antd";

export default class SocialHandle extends Component {
    render() {
        return (
            <div className="social-handle">
                <Icon type="mail" theme="outlined" style={{ fontSize: '16px', color: '#fff' }}></Icon>
                <Icon type="facebook" theme="outlined" style={{ fontSize: '16px', color: '#fff' }}></Icon>
            </div>
        )
    }
}
