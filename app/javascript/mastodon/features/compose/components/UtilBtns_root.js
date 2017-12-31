import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePureComponent from 'react-immutable-pure-component';
import { defineMessages, injectIntl } from 'react-intl';
import Button from '../../../components/button';



const messages = defineMessages({
	risa: { id: 'compose_form.UtilBtns_risa', defaultMessage: 'RISA' },
	goji: { id: 'compose_form.UtilBtns_goji', defaultMessage: 'Typo!!!' },
	harukin: { id: 'compose_form.UtilBtns_harukin', defaultMessage: 'Burn Harukin' }
});

@injectIntl
export default class UtilBtns extends ImmutablePureComponent {
	static propTypes = {
		intl: PropTypes.object.isRequired
	};

	render () {
		const { intl } = this.props;
		
		return (
			<div id="utilBtn">
				<Button text={intl.formatMessage(messages.goji)} onClick={this.onClick} block />
				<Button text={intl.formatMessage(messages.harukin)} onClick={this.onClick} block />
			</div>
		);
	}
}