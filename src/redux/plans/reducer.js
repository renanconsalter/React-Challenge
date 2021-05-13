import { SET_PLANS } from './actions';

export const initialState = {
  plans: [],
};

const plansReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PLANS:
      return {
        ...state,
        plans: action.payload.plans,
      };
    default:
      return {
        ...state,
      };
  }
};

export default plansReducer;
