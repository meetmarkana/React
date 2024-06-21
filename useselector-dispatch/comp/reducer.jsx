<<<<<<< HEAD
import {INCREMENT ,DECREMENT ,INC,DEC} from './action'
const initialState = {
  counter1: { count: 0 },
  counter2: { count: 0 },
};

const hello = (state = initialState, action) => {
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
    case INC:
      return {
        ...state,
        counter2: { count: state.counter2.count + 1 },
      };
    case DEC:
      return {
        ...state,
        counter2: { count: Math.max(0, state.counter2.count - 1) },
      };
    default:
      return state;
  }
};

=======
import {INCREMENT ,DECREMENT ,INC,DEC} from './action'
const initialState = {
  counter1: { count: 0 },
  counter2: { count: 0 },
};

const hello = (state = initialState, action) => {
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
    case INC:
      return {
        ...state,
        counter2: { count: state.counter2.count + 1 },
      };
    case DEC:
      return {
        ...state,
        counter2: { count: Math.max(0, state.counter2.count - 1) },
      };
    default:
      return state;
  }
};

>>>>>>> 0f6b248f9c79b538bc2e0acb5f760c2ee4ff8383
export default hello;