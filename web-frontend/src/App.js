import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import TXView from "./view/com/TXView";
import AgreementView from "./view/com/AgreementView";
import ProductView from "./view/com/ProductView";
import CompanyView from "./view/com/CompanyView";
import FeeView from "./view/com/FeeView";
import UserView from "./view/UserView";
import ProductView from "./view/ProductView";
import ProcessView from "./view/ProcessView";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<ManagerView />} />
                {/* param 决定 /submit and /check */}
                <Route path="/com/agreement/:param" element={<AgreementView />} />

                <Route path="/com/product_submit" element={<ProductView />} />

                <Route path="/com/company_check" element={<CompanyView />} />

                <Route path="/com/fee" element={<FeeView />} />

                <Route path="/com/tx_handle" element={<TXView />} />
                <Route exact path="/" element={<UserView />} />
                <Route exact path="/product_details/:id" element={<ProductView />}/>
                <Route exact path="/process" element={<ProcessView />} />
            </Routes>
        </Router>
    );
}

export default App;