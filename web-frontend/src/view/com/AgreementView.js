import {useParams} from "react-router-dom";

function AgreementView() {
    let {param} = useParams();

    if(param === "submit") {
        return (
            <div>
                <h1>Agreement Submit</h1>
            </div>
        );
    }else if(param === "check") {
        return (
            <div>
                <h1>Agreement Check</h1>
            </div>
        );
    }else {
        return (
            <div>
                <h1>Agreement</h1>
            </div>
        );

    }
}
export default AgreementView;