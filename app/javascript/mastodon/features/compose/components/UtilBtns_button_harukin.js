import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../components/button';



export default class Harukin extends React.PureComponent {
	onClick = () => {
		
	}

	render () {
		return (
			<Button text="はるきん焼却" onClick={this.onClick} block />
		);
	}
}