import logo from './logo.svg';
import './App.css';

import StatefulGreeting from "./components/StatefulGreeting";

function App() {
    return (
        <div className="App">

            <StatefulGreeting greeting="I'm a stateful component" name="Gatita" />
        </div>
    );
}

export default App;
