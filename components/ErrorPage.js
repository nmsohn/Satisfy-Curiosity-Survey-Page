import React, { Component } from 'react';

export default class RootError extends Component {
	render() {
		const { statusCode } = this.props;
		return <div statuscode={statusCode} />;
	}
}
