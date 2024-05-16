import './App.css';
import ManagerView from "./view/ManagerView";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import TXView from "./view/com/TXView";
import AgreementView from "./view/com/AgreementView";
import ProductView from "./view/com/ProductView";
import CompanyView from "./view/com/CompanyView";
import FeeView from "./view/com/FeeView";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<ManagerView />} />
                {/* /submit and /check */}
                <Route path="/com/agreement/:param" element={<AgreementView />} />
                <Route path="/com/product_submit" element={<ProductView />} />
                <Route path="/com/company_check" element={<CompanyView />} />
                <Route path="/com/product_fee" element={<FeeView />} />
                <Route path="/com/tx_handle" element={<TXView />} />
            </Routes>
        </Router>
    );
}

export default App;