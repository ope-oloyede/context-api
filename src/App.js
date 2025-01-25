import './App.css';
import Counter from './Context/Counter';
import {CounterContextProvider} from "./Context/Context API/user-context-provider"

const App = () => {
  return (
    <CounterContextProvider>
      <Counter/>
    </CounterContextProvider>
  );
};

export default App;
