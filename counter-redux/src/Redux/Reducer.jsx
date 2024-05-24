import {INCREMENT ,DECREMENT} from './Action'
const initialState = {
  counter1: { count: 0 },
  
};

const Count = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter1: { count: state.counter1.count + 1 },
      };
    case DECREMENT:
      return {
        ...state,
        counter1: { count: Math.max(0, state.counter1.count - 1) },
      };
    default : 
      return state;
  }
};

export default Count;