import React from "react";

import { ReactSortable } from "react-sortablejs";
import { CloseCircleFilled } from "@ant-design/icons";
import {Layout} from "antd";

const FieldSetCenter = ({
                            fieldList = [],
                            currentField = {},
                            onFieldChange = () => {},
                            handleChooseField = () => {},
                        }) => {


    const handleDelete = (e, index) => {
        e.stopPropagation();
        const newFieldList = [...fieldList];
        if (index >= 0 && index < newFieldList.length) {
            newFieldList.splice(index, 1);
            if (currentField.id === fieldList[index].id) {
                handleChooseField({});
            }
            onFieldChange(newFieldList);
        }
    };

    return (
        <ReactSortable
            list={fieldList || []}
            animation={200}
            group={{ name: "sort-field" }}
            setList={(list) =>
                onFieldChange(
                    list.map((item) => ({
                        ...item,
                        id: item?.id ? item?.id : new Date().getTime(),
                    }))
                )
            }
            sort={true}
            forceFallback={true}
            className="field-center"
        >
            {!!fieldList?.length === 0 ? (
                <div className="main-tooltip">请选择左侧的组件</div>
            ) : (
                fieldList.map((item, index) => {
                    return (
                        <div
                            className="main-field"
                            key={index}
                            onClick={() => handleChooseField(item)}
                        >
                            <div className="sort-item" key={item?.id}>
                                {item?.name}
                            </div>
                            <CloseCircleFilled
                                className="main-field-delete"
                                onClick={(e) => handleDelete(e, index)}
                            />
                        </div>
                    );
                })
            )}
        </ReactSortable>
    );
};

export default FieldSetCenter;
