import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import UserView from "./view/UserView";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<UserView />} />
            </Routes>
        </Router>
    );
}

export default App;