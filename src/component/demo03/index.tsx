import React, { useEffect, useState } from "react";
import { Checkbox } from "antd";
import Test from "./test";
import useSelected from "./useSelected";

const CheckboxGroup = Checkbox.Group;

const plainOptions = ["Apple", "Pear", "Orange"];
const defaultCheckedList = ["Apple", "Orange"];

const Demo3: React.SFC<any> = props => {
  const [checkedList, setcheckedList] = useState(defaultCheckedList);
  const [isLoad, setisLoad] = useState(false);

  const [selStr] = useSelected(checkedList);

  useEffect(() => {
    console.log("初始化组件...");
    return () => {
      console.log("清除组件...");
    };
  }, []);

  useEffect(() => {
    console.log("监听多选框值的变化:", checkedList);
    if (checkedList.length === plainOptions.length) {
      setisLoad(true);
    } else {
      setisLoad(false);
    }
  }, [checkedList]);

  const onChange = checkedList => {
    setcheckedList(checkedList);
  };

  return (
    <div>
      <p>{selStr}</p>
      <p>全选加载组件</p>
      <CheckboxGroup
        options={plainOptions}
        value={checkedList}
        onChange={onChange}
      />
      {isLoad ? <Test /> : null}
    </div>
  );
};

export default Demo3;
