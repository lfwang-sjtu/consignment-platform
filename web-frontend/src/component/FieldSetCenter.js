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
    //删除添加的布局字段
    const handleDelete = (e, id) => {
        e.stopPropagation();
        const newFieldList = [...fieldList];
        const curIndex = newFieldList.findIndex((item) => item.id === id);
        if (curIndex !== -1) {
            let deleteItem = newFieldList.splice(curIndex, 1);
            if (deleteItem?.[0]?.id === currentField?.id) {
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
                                onClick={(e) => handleDelete(e, item?.id)}
                            />
                        </div>
                    );
                })
            )}
        </ReactSortable>
    );
};

export default FieldSetCenter;
