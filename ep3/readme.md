# 🚀 Redux Leaderboard (RLB) Curriculum - Ep3 🎉

Welcome to Episode 3 of the *Redux Leaderboard (RLB) Curriculum*! 🎉 In this thrilling episode, we'll produce a Hello World Redux.js Single-Page Application (SPA). Get ready to harness the power of Redux and create your first interactive SPA with ease! 🚀

## Curriculum Structure - Redux Leaderboard (RLB) 📘

- **Episode 3: Producing a Hello World Redux.js SPA**
  - *Creating Redux Store*: 🏰 Learn the ancient art of creating the Redux store, the source of truth for your application's state.
  - *Implementing Actions and Reducers*: 🔮 Delve into the mystical realms of actions and reducers, and watch your application respond to the power of your spells!
  - *Connecting React Components to the Store*: ✨ Connect your React components to the Redux store, and witness the magic of state management come to life!

### Prerequisites 🧭

Before you embark on this enchanting journey, ensure you have the following magical tools:

- **npm** (Node Package Manager): To cast spells of package installations, ensure you possess the enchanted powers of npm. If you haven't acquired it yet, fear not! You can obtain it along with Node.js from [here](https://nodejs.org/en/download).

## Getting Started 🎒

Follow these magical steps to begin your adventure in state management and interactivity:

1. **Clone the Repository**: If you haven't already done so, clone the RLB repository to your local machine using the following spell:

```bash
git clone https://github.com/WebmastersLTD/rlb.git
```

2. **Navigate to Episode 3**: In your command center (terminal or command prompt), move to the `ep3` directory of the repository:

```bash
cd rlb/ep3
```

3. **Install Dependencies**: Summon the magical dependencies required for this episode by running the following incantation:

```bash
npm install
```

With these preparations in place, you are now equipped to embark on your adventure to produce a Hello World Redux.js SPA!

## The Magic of Redux 🧙‍♂️

### Creating Redux Store

The Redux store serves as the single source of truth for your application's state. To create the store, you'll need to perform the following steps:

1. **Install Redux**: Begin by summoning Redux to your project by installing it as a dependency:

```bash
npm install redux
```

2. **Import Redux**: In your magical code incantation (JavaScript file), import Redux:

```javascript
import { createStore } from 'redux';
```

3. **Create the Store**: Use the `createStore` function to create the store and pass in a reducer as an argument:

```javascript
const reducer = (state, action) => {
  // Implement your reducer logic here
  return state;
};

const store = createStore(reducer);
```

### Implementing Actions and Reducers

Actions and reducers form the heart of Redux, allowing you to perform magical state updates. To implement them:

1. **Defining Actions**: Declare the actions that will describe the type of magical spells you wish to cast:

```javascript
const ADD_SCORE = 'ADD_SCORE';

// Define action creators
const addScore = (name, score) => {
  return {
    type: ADD_SCORE,
    payload: { name, score },
  };
};
```

2. **Creating Reducers**: Implement your reducer logic to handle different types of actions:

```javascript
const initialState = {
  leaderboard: [],
};

const reducer = (state = initialState, action) => {
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
```

### Connecting React Components to the Store

Now that you have the magical store and actions in place, it's time to connect your React components to the Redux store:

1. **Install React Redux**: Summon the powers of React Redux by installing it as a dependency:

```bash
npm install react-redux
```

2. **Import React Redux**: In your React components, import the necessary functions from React Redux:

```javascript
import { Provider, useDispatch, useSelector } from 'react-redux';
```

3. **Wrap Your App**: Surround your application with the `Provider` component and pass the Redux store as a prop:

```javascript
const App = () => {
  return (
    <Provider store={store}>
      {/* Your magical components go here */}
    </Provider>
  );
};
```

4. **Access State and Dispatch**: In your components, use the `useSelector` and `useDispatch` hooks to access state and dispatch actions:

```javascript
const Leaderboard = () => {
  const leaderboard = useSelector(state => state.leaderboard);
  const dispatch = useDispatch();

  // Your component code here
};
```

With these steps, you are now prepared to create your Hello World Redux.js SPA and wield the power of state management in your web applications!

## Congratulations, Brave Developer! 🎉

You have completed Episode 3 of the Redux Leaderboard (RLB) Curriculum, and you now hold the knowledge to produce a Hello World Redux.js SPA. May you continue to explore the enchanting realms of Redux and JavaScript, building remarkable web applications along the way!

Remember, your journey doesn't end here. The RLB adventure continues with even more thrilling episodes, each unraveling new powers and knowledge. Keep exploring, learning, and honing your magical craft!

If you encounter any mystic issues or desire to share your triumphs, don't hesitate to open an issue or send us a magical pull request. Together, we shall continue to improve and expand this epic curriculum!

Happy coding, brave adventurer! 🧙‍♂️💻

## Troubleshooting

If you encounter any issues during your magical journey, fear not! Below are some common issues and their solutions to aid you in overcoming any obstacles.

### Issue: Spells not taking effect or application not responding to state changes.

- **Solution**: Ensure that your reducer logic is correctly implemented, and the actions dispatched have the correct type. Double-check that you are accessing the state and dispatch correctly within your React components using `useSelector` and `useDispatch`.

### Issue: Spells causing errors or unexpected results.

- **Solution**: Inspect your reducer and action implementation for any bugs or syntax errors. Verify that the state structure and action payloads match your application's requirements.

### Issue: Unable to find Redux store.

- **Solution**: Make sure that you have wrapped your application with the `Provider` component from React Redux and passed the Redux store as a prop. Check that the store is created and exported correctly from the file where it is defined.

If you encounter other mysterious issues, consult the wizards of the internet or seek help from the magical community in the RLB repository. Happy problem-solving!

## License 📜

The source code is licensed under the [MIT License](http://opensource.org/licenses/mit-license.php).