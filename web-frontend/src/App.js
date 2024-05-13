import './App.css';
import ManagerView from "./view/ManagerView";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<ManagerView />} />
                {/* 在这里添加其他路由 */}
            </Routes>
        </Router>
    );
}

export default App;