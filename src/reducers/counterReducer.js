import { v4 as uuidv4 } from 'uuid';

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COUNTER':
      return [
        ...state,
        {
          id: uuidv4(),
          title: 'Counter',
          count: 0
        }
      ];
    case 'REMOVE_COUNTER':
      return state.filter((counter) => counter.id !== action.id);
    case 'INCREMENT_COUNTER': {
      const counterObj = state.find((counter) => counter.id === action.id);
      return [
        ...state.filter((counter) => counter.id !== action.id),
        counterObj && {
          id: counterObj.id,
          title: counterObj.title,
          count: counterObj.count + 1
        }
      ];
    }
    case 'DECREMENT_COUNTER': {
      const counterObj = state.find((counter) => counter.id === action.id);
      return [
        ...state.filter((counter) => counter.id !== action.id),
        counterObj && {
          id: counterObj.id,
          title: counterObj.title,
          count: Math.max(counterObj.count - 1, 0)
        }
      ];
    }
    case 'EDIT_TITLE': {
      const counterObj = state.find((counter) => counter.id === action.id);
      return [
        ...state.filter((counter) => counter.id !== action.id),
        counterObj && {
          id: counterObj.id,
          title: action.title,
          count: counterObj.count
        }
      ];
    }
    default:
      return state;
  }
};

export default counterReducer;
