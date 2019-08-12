import { connect } from 'react-redux';
import UtilBtns from '../components/UtilBtns';

import {
	submitGoji,
	submitHarukin
} from '../../../actions/UtilBtns';



const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
	onGojiSubmit () {
		dispatch(submitGoji());
	},

	onHarukinSubmit () {
		dispatch(submitHarukin());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(UtilBtns);
