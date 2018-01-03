import { Map as ImmutableMap, fromJS } from 'immutable';

import {
	UTILBTNS_RISA,
	UTILBTNS_GOJI,
	UTILBTNS_HARUKIN
} from '../actions/UtilBtns';



const initialState = ImmutableMap();

export default function UtilBtns(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}
