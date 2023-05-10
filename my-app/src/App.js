import logo from './logo.svg';
import './App.css';

import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';

function App() {
    return (
        <div className="App">
            <ConditionalRenderingFunctional connected={false} />
            <ConditionalRenderingClass />

        </div>



    );
}

export default App;
