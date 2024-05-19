import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AtomicService from "./component/AtomicService";
import UserView from "./view/UserView";
import ProductView from "./view/ProductView";
import ProcessView from "./view/ProcessView";
import {useState} from "react";

function App() {
    const [userInfo, setUserInfo] = useState();
    const [productInfo, setProductInfo] = useState();
    const [txInfo, setTxInfo] = useState();
    const [processInfo, setProcessInfo] = useState();
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<ManagerView />} />
                <Route exact path="/process" element={<AtomicService />} />
                {/* 在这里添加其他路由 */}
                <Route exact path="/" element={<UserView />} />
                <Route exact path="/product_details/:id" element={<ProductView />}/>
                <Route exact path="/process" element={<ProcessView />} />
            </Routes>
        </Router>
    );
}

export default App;