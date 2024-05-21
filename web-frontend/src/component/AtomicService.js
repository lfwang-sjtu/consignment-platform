import React, {useEffect, useState} from "react";

import { Row, Col, Button } from "antd";
import { FormSetDiv } from "../css/style";
import FieldSetLeft from "./FieldSetLeft";
import FieldSetCenter from "./FieldSetCenter";
import {useLocation} from "react-router-dom";
import {getAtomiclist, getFieldList, putprocess} from "../services/atomicservice";


function AtomicService() {


    const [currentField, setCurrentField] = useState({});
    const [fieldList, setFieldList] = useState([]);
    const [atomiclist, setAtomiclist] = useState([]);
    const [process, setProcess] = useState();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');


    useEffect(() => {

        if (atomiclist.length === 0) { // 修改判断条件，确保在 fieldList 为空数组时调用

        //     fetch("http://202.120.40.86:14642/rmp-resource-service/project/66289c8cdffd2d00144103a2/resource/AtomicServices/", {
        //         method: "GET",
        //     })
        //         .then((response) => response.json())
        //         .then((result) => {
        //             console.log("Success:", result);
        //             setAtomiclist(result.data);
        //         })
        //         .catch((error) => {
        //             console.error("Error:", error);
        //         });
        // }
        getAtomiclist()
            .then(data => {
                setAtomiclist(data);
            }).catch(error => {
                console.error("Error:", error);
            })
        }

    }, []);


    useEffect(() => {
        if (fieldList.length === 0 && atomiclist.length!=0) { // 修改判断条件，确保在 fieldList 为空数组时调用
        //     fetch("http://202.120.40.86:14642/rmp-resource-service/project/66289c8cdffd2d00144103a2/resource/test/"+id, {
        //         method: "GET",
        //     })
        //         .then((response) => response.json())
        //         .then((result) => {
        //             console.log("Success:", result);
        //             setProcess(result.data)
        //             const ids = result.data.process.split(',').map(Number);
        //             setFieldList(ids.map(id => atomiclist.find(obj => obj.id === id)).filter(Boolean))
        //         })
        //         .catch((error) => {
        //             console.error("Error:", error);
        //         });

            getFieldList(id)
                .then(data => {
                    console.log("Success:", data);
                    setProcess(data)
                    const ids = data.process ? data.process.split(',').map(Number) : [];
                    setFieldList(ids.map(id => atomiclist.find(obj => obj.id === id)).filter(Boolean))
                }).catch(error => {
                console.error("Error:", error);
            })
        }

    }, [atomiclist]);

    return (
        <FormSetDiv>
            <div className="fieldSet-header">
                <Button type="primary" onClick={()=>{
                    console.log(fieldList)
                    process.process = fieldList.map(obj => obj.id).join(',')
                    console.log(process)
                    putprocess(id,{name:process.name,process:process.process}).then(data=>{
                        console.log("Success:", data);
                    })
                        .catch((error)=>{
                            console.error("Error:", error);
                        })

                }}>保存</Button>
            </div>
            <div className="fieldSet-main">
                <Row className="fieldSet-main-content">
                    <Col span={6} className="fieldSet-main-content-left">
                        <FieldSetLeft />
                    </Col>
                    <Col span={15} className="fieldSet-main-content-center">
                        <FieldSetCenter
                            fieldList={fieldList}
                            currentField={currentField}
                            onFieldChange={(list) => setFieldList(list)}
                            handleChooseField={(field) => setCurrentField(field)}
                        />
                    </Col>
                </Row>
            </div>
        </FormSetDiv>
    );
}
export default AtomicService;