import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import UserView from "./view/UserView";
import ProductView from "./view/ProductView";
import ProcessView from "./view/ProcessView";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<UserView />} />
                <Route exact path="/product_details/:id" element={<ProductView />}/>
                <Route exact path="/process" element={<ProcessView />} />
            </Routes>
        </Router>
    );
}

export default App;