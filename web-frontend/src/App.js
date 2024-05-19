import './App.css';
import ManagerView from "./view/ManagerView";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AtomicService from "./component/AtomicService";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<ManagerView />} />
                <Route exact path="/process" element={<AtomicService />} />
                {/* 在这里添加其他路由 */}
            </Routes>
        </Router>
    );
}

export default App;