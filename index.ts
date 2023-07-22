import { createStore } from 'redux';

// Define action types
const ADD_SCORE = 'ADD_SCORE';

// Define action creators
interface AddScoreAction {
  type: typeof ADD_SCORE;
  payload: { name: string; score: number };
}

const addScore = (name: string, score: number): AddScoreAction => {
  return {
    type: ADD_SCORE,
    payload: { name, score },
  };
};

// Define the initial state
interface LeaderboardState {
  leaderboard: { name: string; score: number }[];
}

const initialState: LeaderboardState = {
  leaderboard: [],
};

// Define the reducer
type LeaderboardActionTypes = AddScoreAction;

const reducer = (state = initialState, action: LeaderboardActionTypes): LeaderboardState => {
  switch (action.type) {
    case ADD_SCORE:
      return {
        ...state,
        leaderboard: [...state.leaderboard, action.payload],
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducer);

// Dispatch actions to the store
store.dispatch(addScore('John Doe', 1000));
store.dispatch(addScore('Jane Smith', 950));
store.dispatch(addScore('Mike Johnson', 800));
store.dispatch(addScore('Sarah Lee', 750));
store.dispatch(addScore('David Brown', 700));

// Get the current state
const currentState = store.getState();
console.log('Current State:', currentState);
