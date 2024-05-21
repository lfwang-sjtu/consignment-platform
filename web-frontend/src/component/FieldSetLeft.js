import React, {useEffect, useState} from "react";

import { ReactSortable } from "react-sortablejs";
import {Spin} from "antd";
import {getAtomiclist} from "../services/atomicservice";


const FieldSetLeft = () => {


    const [fieldList, setFieldList] = useState([]);

    useEffect(() => {
        // if (fieldList.length === 0) { // 修改判断条件，确保在 fieldList 为空数组时调用
        //     fetch("http://202.120.40.86:14642/rmp-resource-service/project/66289c8cdffd2d00144103a2/resource/AtomicServices/", {
        //         method: "GET",
        //     })
        //         .then((response) => response.json())
        //         .then((result) => {
        //             console.log("Success:", result);
        //             setFieldList(result.data);
        //         })
        //         .catch((error) => {
        //             console.error("Error:", error);
        //         });
        // }

        getAtomiclist()
            .then(data => {
                console.log("test:", data);
                setFieldList(data);
            }).catch(error => {
            console.error("Error:", error);
        })
    }, []);

    return (
        <>

            <div className="title">原子服务</div>
            {fieldList.length && <ReactSortable
                list={fieldList}
                animation={300}
                group={{
                    name: "sort-field",
                    pull: "clone",
                    put: false,
                }}
                setList={() => {}}
                sort={false}
                style={{ overflow: "auto" }}
                forceFallback={true}
            >
                {fieldList.map((item) => {
                    return (
                        <div className="sort-item" key={item?.id}>
                            {item?.name}
                        </div>
                    );
                })}
            </ReactSortable>}
            {!fieldList.length && <Spin />}
        </>
    );
};

export default FieldSetLeft;
