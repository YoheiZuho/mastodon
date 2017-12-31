import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../components/button';



export default class Goji extends React.PureComponent {
	onClick = () => {

	}

	render () {
		return (
			<Button text="ｺﾞｼﾞﾓﾘｨｨｨｨｨｨ!!!" onClick={this.onClick} block />
		);
	}
}