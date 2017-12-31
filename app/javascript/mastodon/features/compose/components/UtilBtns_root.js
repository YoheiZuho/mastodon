import React from 'react';
import PropTypes from 'prop-types';

import Goji from './UtilBtns_button_goji';
import Harukin from './UtilBtns_button_harukin';



export default class UtilBtns extends React.PureComponent {
	static propTypes = {
		textarea: PropTypes.node
	};

	render () {
		return (
			<div id="utilBtn">
				<Goji textarea={this.props.textarea} />
				<Harukin textarea={this.props.textarea} />
			</div>
		);
	}
}