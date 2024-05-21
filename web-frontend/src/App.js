import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AtomicService from "./component/AtomicService";
import AgreementView from "./view/com/AgreementView";
import ProcessView from "./view/ProcessView";
import ComProcessView from "./view/com/ComProcessView";
import MainView from "./view/com/MainView";
import ManagerView from "./view/ManagerView";
import {useState} from "react";
import UserView from "./view/UserView";
import ProductView from "./view/ProductView";
import LoginView from "./view/com/LoginView";

function App() {
    const [userInfo, setUserInfo] = useState();
    const [productInfo, setProductInfo] = useState();
    const [txInfo, setTxInfo] = useState();
    const [processInfo, setProcessInfo] = useState();

    //TODO:从RMP获取IndividualUser和CompanyUser信息，存在本地（登录界面）
    return (
        <Router>
            <Routes>
                {/*非原子服务， 单独的处理页面（公司信息、费用清单、事务处理）*/}
                <Route exact path="/login" element={<LoginView />} />
                <Route exact path="/com" element={<MainView />} />
                {/*<Route path="/com/fee" element={<FeeView />} />*/}
                {/*<Route path="/com/tx_handle" element={<TXView />} />*/}
                <Route exact path="/com/process" element={<ComProcessView />} />
                {/* 原子服务， 包括产品信息、协议检查、协议上传*/}
                {/* param 决定 /submit and /check */}
                <Route path="/com/agreement/:param" element={<AgreementView />} />


                {/*<Route exact path="/" element={<UserView />} />*/}
                {/*<Route exact path="/product_details/:id" element={<ProductInfoView />}/>*/}
                {/*<Route exact path="/process" element={<ProcessView />} />*/}
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