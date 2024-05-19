import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AtomicService from "./component/AtomicService";
import TXView from "./view/com/TXView";
import AgreementView from "./view/com/AgreementView";
import CompanyView from "./view/com/CompanyView";
import FeeView from "./view/com/FeeView";
import ProcessView from "./view/ProcessView";
import ComProcessView from "./view/com/ComProcessView";
import UserView from "./view/UserView";
import MainView from "./view/com/MainView";

function App() {
    return (
        <Router>
            <Routes>
                {/*非原子服务， 单独的处理页面（公司信息、费用清单、事务处理）*/}
                <Route exact path="/com" element={<MainView />} />
                {/*<Route path="/com/fee" element={<FeeView />} />*/}
                {/*<Route path="/com/tx_handle" element={<TXView />} />*/}
                <Route exact path="/com/process" element={<ComProcessView />} />
                {/* 原子服务， 包括产品信息、协议检查、协议上传*/}
                {/* param 决定 /submit and /check */}
                <Route path="/com/agreement/:param" element={<AgreementView />} />


                <Route exact path="/" element={<UserView />} />
                {/*<Route exact path="/product_details/:id" element={<ProductInfoView />}/>*/}
                <Route exact path="/process" element={<ProcessView />} />
                <Route exact path="/" element={<ManagerView />} />
                <Route exact path="/process" element={<AtomicService />} />
                {/* 在这里添加其他路由 */}
            </Routes>
        </Router>
    );
}

export default App;