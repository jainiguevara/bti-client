import moment from 'moment'

import * as actions from './../actions/query'

const {
  SET_FILTERS
} = actions

const initialState = {
  // text: '',
  // sortBy: 'date',
  startDate: moment().format('YYYY-MM-DD'),
  endDate: moment().format('YYYY-MM-DD')
};

export default (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case SET_FILTERS:
      return {
        ...state,
        ...payload
      }
    default:
      return state;
  }
}
