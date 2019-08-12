import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePureComponent from 'react-immutable-pure-component';
import { defineMessages, injectIntl } from 'react-intl';
import Button from '../../../components/button';



const messages = defineMessages({
	goji: { id: 'compose_form.UtilBtns_goji', defaultMessage: 'Typo!!!' },
	harukin: { id: 'compose_form.UtilBtns_harukin', defaultMessage: 'Burn Harukin' }
});

@injectIntl
export default class UtilBtns extends ImmutablePureComponent {
	static propTypes = {
		intl: PropTypes.object.isRequired,

		onGojiSubmit: PropTypes.func.isRequired,
		onHarukinSubmit: PropTypes.func.isRequired
	};

	render () {
		const { intl, onGojiSubmit, onHarukinSubmit } = this.props;
		
		return (
			<div id="utilBtns">
				<Button id="utilBtns__button--goji" className="utilBtns__button" text={intl.formatMessage(messages.goji)} onClick={onGojiSubmit} block />
				<Button id="utilBtns__button--harukin" className="utilBtns__button" text={intl.formatMessage(messages.harukin)} onClick={onHarukinSubmit} block />
			</div>
		);
	}
}
