import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AtomicService from "./component/AtomicService";
import AgreementView from "./view/com/AgreementView";
import ProcessView from "./view/ProcessView";
import ComProcessView from "./view/com/ComProcessView";
import MainView from "./view/com/MainView";
import UserView from "./view/UserView";
import ProductView from "./view/ProductView";
import {useState} from "react";

function App() {
    // global state for user
    const [userBusiness, setUserBusiness] = useState("");
    const [userInfo, setUserInfo] = useState(null);

    return (
        <Router>
            <Routes>
                // company
                <Route exact path="/com" element={<MainView />} />
                <Route exact path="/com/process" element={<ComProcessView />} />
                <Route path="/com/agreement/:param" element={<AgreementView />} />
                // manager
                <Route exact path="/process" element={<AtomicService />} />
                // user
                <Route exact path="/" element={<UserView setUserBusiness={setUserBusiness}/>} />
                <Route exact path="/product_details/:id" element={<ProductView setUserBusiness={setUserBusiness}/>} />
                <Route exact path="/userprocess" element={<ProcessView userBusiness={userBusiness}/>} />
            </Routes>
        </Router>
    );
}

export default App;