import Sidebar from './components/Sidebar';
import Deliverylist from './components/Deliverylist';
import './App.css';

const App = () => {
    return (
        <div className="AppContainer">
            <Sidebar />
            <Deliverylist />
        </div>
    );
}

export default App;