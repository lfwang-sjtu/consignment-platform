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
import LoginView from "./view/com/LoginView";

function App() {
    // global state for user
    const [userBusiness, setUserBusiness] = useState("");
    const [userInfo, setUserInfo] = useState(
        {
            "address": "123 Main St, City, Country",
            "question": "What is your favorite color?",
            "birthDate": "1990-01-01",
            "realname": "John Doe",
            "password": "password1",
            "joinDate": "2024-01-01",
            "balance": 10000.0,
            "answer": "Blue",
            "phone": "0000000000",
            "idcard": "123456789012345678",
            "id": 1,
            "email": "user1@example.com",
            "username": "user1",
            "status": 1
        }
    );
    const [userProduct, setUserProduct] = useState({
        "id": 1,
        "name": "safe medicare"
    });
    const [createTxInfo, setCreateTxInfo] = useState({
        "userid": 1,
        "productid": 1,
        "amount": 1000,
        "name": "this product",
        "date": "1970-01-01",
        "status": 0, // 0 means create, 1 means refund
        "id": 1,
        "rate": 0.01
    });
    const [income, setIncome] = useState("");

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LoginView />} />
                // company
                <Route exact path="/com" element={<MainView />} />
                <Route exact path="/com/process" element={<ComProcessView />} />
                <Route path="/com/agreement/:param" element={<AgreementView />} />
                // manager
                <Route exact path="/process" element={<AtomicService />} />
                // user
                <Route exact path="/user/userview" element={<UserView
                    userInfo={userInfo}
                    setUserBusiness={setUserBusiness}
                    setUserProduct={setUserProduct}
                    setCreateTxInfo={setCreateTxInfo}
                />} />
                <Route exact path="/user/product_details/:id" element={<ProductView
                    userInfo={userInfo}
                    userProduct={userProduct}
                    setUserBusiness={setUserBusiness}
                    setCreateTxInfo={setCreateTxInfo}
                />} />
                <Route exact path="/user/process" element={<ProcessView
                    userInfo={userInfo}
                    userBusiness={userBusiness}
                    createTxInfo={createTxInfo}
                    setIncome={setIncome}
                    income={income}
                />} />
            </Routes>
        </Router>
    );
}

export default App;